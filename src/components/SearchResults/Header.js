import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentWeather,
  selectCurrentLocation,
} from '../../app/WeatherSlice';
import { Button } from '../../shared.styles';
import {
  SearchResultsHeader,
  SelectedResult,
  SelectedResultCard,
} from './SearchResults.styles';

function Header() {
  const currentWeather = useSelector(selectCurrentWeather);
  const currentLocation = useSelector(selectCurrentLocation);

  return (
    <SearchResultsHeader>
      <SelectedResult>
        <SelectedResultCard>
          <img
            src='https://img.icons8.com/color/96/000000/weather-forecast.png'
            alt='Weather'
            style={{ marginRight: '3rem' }}
          />
          <div>
            <h3>{currentLocation.name}</h3>
            <span>{currentWeather?.temperature}'C</span>
          </div>
        </SelectedResultCard>
        <h1>{currentWeather?.weatherText}</h1>
        <div>
          <Button>Add to Favorites</Button>
        </div>
      </SelectedResult>
    </SearchResultsHeader>
  );
}

export default Header;
