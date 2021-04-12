import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './WeatherSlice';

export const store = configureStore({
  reducer: {
    weather: searchReducer,
    //favorites: ,
  },
});
