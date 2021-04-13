import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { SearchWrapper, SearchInput } from './Search.styles';
import {
  fetchSuggestions,
  fetchNext5DaysWeather,
  fetchCurrentWeather,
} from './SearchAPI';
import { Button } from '../../shared.styles';
import Suggestions from './Suggestions';
import { useDispatch } from 'react-redux';
import {
  changeLocation,
  changeNext5Days,
  changeCurrentWeather,
} from '../../app/WeatherSlice';

function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState(null);
  const searchInput = useRef(null);

  const dispatch = useDispatch();

  async function changeHandler() {
    const result = await fetchSuggestions(searchInput.current.value);
    setSuggestions(result);
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (location === null) {
      setLocation({
        id: suggestions.filter(
          (city) =>
            city.LocalizedName.toLowerCase() ===
            e.target[0].value.toLowerCase(),
        )[0]?.Key,
        name: e.target[0].value,
      });
    }

    if (location.id == null) return setSuggestions([]);

    const next5Days = await fetchNext5DaysWeather(location.id);
    const currentWeather = await fetchCurrentWeather(location.id);

    dispatch(changeLocation(location));
    dispatch(changeNext5Days(next5Days));
    dispatch(changeCurrentWeather(currentWeather));

    setSuggestions([]);
    setLocation(null);
  }

  return (
    <SearchWrapper>
      <form onSubmit={submitHandler}>
        <SearchInput
          type='text'
          placeholder='City'
          ref={searchInput}
          onChange={_.debounce(changeHandler, 1000)}
        />
        <Button>Check weather</Button>
        <Suggestions
          suggestions={suggestions}
          input={searchInput}
          setLocation={setLocation}
          emptySuggestions={() => setSuggestions([])}
        />
      </form>
    </SearchWrapper>
  );
}

export default Search;
