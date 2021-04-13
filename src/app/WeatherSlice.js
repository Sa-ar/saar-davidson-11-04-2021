import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: {
    location: {},
    next5Days: [],
    currentWeather: {},
  },
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeLocation: (state, action) => {
      state.weather.location = action.payload;
    },
    changeNext5Days: (state, action) => {
      state.weather.next5Days = action.payload.DailyForecasts;
    },
    changeCurrentWeather: (state, action) => {
      if (state.weather.currentWeather)
        state.weather.currentWeather = {
          temperature: action.payload[0].Temperature.Metric.Value,
          weatherText: action.payload[0].WeatherText,
        };
    },
  },
});

export const {
  changeLocation,
  changeNext5Days,
  changeCurrentWeather,
} = weatherSlice.actions;

export const selectCurrentWeather = (state) => {
  return state.weather.weather.currentWeather;
};

export const selectNext5Days = (state) => state.weather.weather.next5Days;

export const selectCurrentLocation = (state) => state.weather.weather.location;

export const selectWeather = (state) => state.weather.weather;

export default weatherSlice.reducer;
