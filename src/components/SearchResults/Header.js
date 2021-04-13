import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../app/WeatherSlice';
import { Button } from '../../shared.styles';
import {
  SearchResultsHeader,
  SelectedResult,
  SelectedResultCard,
} from './SearchResults.styles';
import { useDispatch } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  selectFavorites,
} from '../../app/FavoritesSlice';

function Header() {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);
  const favorites = useSelector(selectFavorites);
  const [isInFavorite, setIsInFavorite] = useState(
    favorites.find((item) => item.location.id === weather.location.id),
  );

  useEffect(() => {
    setIsInFavorite(
      favorites.find((item) => item.location.id === weather.location.id),
    );
  }, [weather, favorites]);

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
            <h3>{weather.location?.name}</h3>
            <span>{weather.currentWeather?.temperature}'C</span>
          </div>
        </SelectedResultCard>
        <h1>{weather.currentWeather?.weatherText}</h1>
        <div>
          {isInFavorite ? (
            <Button
              onClick={() => {
                setIsInFavorite(false);
                dispatch(deleteFavorite(weather));
              }}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              onClick={() => {
                setIsInFavorite(true);
                dispatch(addFavorite(weather));
              }}
            >
              Add to Favorites
            </Button>
          )}
        </div>
      </SelectedResult>
    </SearchResultsHeader>
  );
}

export default Header;
