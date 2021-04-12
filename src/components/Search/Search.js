import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { SearchWrapper, SearchInput } from './Search.styles';
import {
  fetchSuggestions,
  fetchNext5DaysWeather,
  fetchCurrentWeather,
} from './SearchAPI';
import { Button } from '../../shared.styles';
import { useDispatch } from 'react-redux';
import {
  changeLocation,
  changeNext5Days,
  changeCurrentWeather,
} from '../../app/WeatherSlice';

function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const searchInput = useRef(null);

  const dispatch = useDispatch();

  async function changeHandler() {
    const result = await fetchSuggestions(searchInput.current.value);
    setSuggestions(result);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const newLocation = {
      id: suggestions.filter(
        (city) =>
          city.LocalizedName.toLowerCase() === e.target[0].value.toLowerCase(),
      )[0]?.Key,
      name: e.target[0].value,
    };

    if (newLocation.id == null) return setSuggestions([]);

    const next5Days = await fetchNext5DaysWeather(newLocation.id);
    const currentWeather = await fetchCurrentWeather(newLocation.id);

    dispatch(changeLocation(newLocation));
    dispatch(changeNext5Days(next5Days));
    dispatch(changeCurrentWeather(currentWeather));

    setSuggestions([]);
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
        {!!suggestions && (
          <ul>
            {suggestions.map((suggestion) => (
              <li>{suggestion.LocalizedName}</li>
            ))}
          </ul>
        )}
      </form>
    </SearchWrapper>
  );
}

export default Search;
