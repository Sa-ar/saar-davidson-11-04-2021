import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentWeather } from '../../app/WeatherSlice';
import {
  SearchResultsHeader,
  SelectedResult,
  SelectedResultCard,
} from './SearchResults.styles';

function Header() {
  const currentWeather = useSelector(selectCurrentWeather);

  return (
    <SearchResultsHeader>
      <SelectedResult>
        <SelectedResultCard>
          <img src='' alt='' />
          <div>
            <h3>Tel Aviv</h3>
            <span>{currentWeather?.temperature}'C</span>
          </div>
        </SelectedResultCard>
        <div>
          <button>Like</button>
          <button>Add to Favorites</button>
        </div>
      </SelectedResult>

      <h1>{currentWeather?.weatherText}</h1>
    </SearchResultsHeader>
  );
}

export default Header;
