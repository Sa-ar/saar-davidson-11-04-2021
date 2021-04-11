import React from 'react';
import { Next5DaysSection, Next5DaysList } from './SearchResults.styles';
import WeatherCard from '../WeatherCard/WeatherCard';

function Next5Days() {
  return (
    <Next5DaysSection>
      <Next5DaysList>
        <WeatherCard day='Sun' temperature={38} />
        <WeatherCard day='Mon' temperature={38} />
        <WeatherCard day='Tue' temperature={38} />
        <WeatherCard day='Wed' temperature={38} />
        <WeatherCard day='Thu' temperature={38} />
      </Next5DaysList>
    </Next5DaysSection>
  );
}

export default Next5Days;
