import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './WeatherSlice';
import favoritesReducer from './FavoritesSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favorites: favoritesReducer,
  },
});
