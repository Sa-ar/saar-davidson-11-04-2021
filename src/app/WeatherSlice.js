import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentWeather,
  fetchNext5DaysWeather,
} from '../components/Search/SearchAPI';

const initialState = {
  status: 'idle',
  location: { id: 215854, name: 'Tel Aviv' },
  currentWeather: {
    temperature: 15.5,
    weatherText: 'Partly cloudy',
  },
  next5Days: [
    {
      Date: '2021-04-11T07:00:00+03:00',
      EpochDate: 1618113600,
      Temperature: {
        Minimum: {
          Value: 54,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 65,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
    },
    {
      Date: '2021-04-12T07:00:00+03:00',
      EpochDate: 1618200000,
      Temperature: {
        Minimum: {
          Value: 51,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 66,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
    },
    {
      Date: '2021-04-13T07:00:00+03:00',
      EpochDate: 1618286400,
      Temperature: {
        Minimum: {
          Value: 54,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 67,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
    },
    {
      Date: '2021-04-14T07:00:00+03:00',
      EpochDate: 1618372800,
      Temperature: {
        Minimum: {
          Value: 55,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 72,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
    },
    {
      Date: '2021-04-15T07:00:00+03:00',
      EpochDate: 1618459200,
      Temperature: {
        Minimum: {
          Value: 58,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 75,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
    },
  ],
};

export const getCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async (locationId) => {
    const response = await fetchCurrentWeather(locationId);

    return response[0];
  },
);

export const getNext5DaysWeather = createAsyncThunk(
  'weather/fetchNext5DaysWeather',
  async (locationId) => {
    const response = await fetchNext5DaysWeather(locationId);

    return response;
  },
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    changeNext5Days: (state, action) => {
      state.next5Days = action.payload.DailyForecasts;
    },
    changeCurrentWeather: (state, action) => {
      state.currentWeather.temperature =
        action.payload[0].Temperature.Metric.Value;
      state.currentWeather.weatherText = action.payload[0].WeatherText;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentWeather.temperature =
          action.payload.Temperature.Metric.Value;
        state.currentWeather.weatherText = action.payload.WeatherText;
      })
      .addCase(getNext5DaysWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNext5DaysWeather.fulfilled, (state, action) => {
        state.status = 'idle';
        state.next5Days = action.payload.DailyForecasts;
      });
  },
});

export const {
  changeLocation,
  changeNext5Days,
  changeCurrentWeather,
} = weatherSlice.actions;

export const selectCurrentWeather = (state) => {
  return state.weather.currentWeather;
};

export const selectNext5Days = (state) => state.weather.next5Days;

export const selectCurrentLocation = (state) => state.weather.location;

export default weatherSlice.reducer;
