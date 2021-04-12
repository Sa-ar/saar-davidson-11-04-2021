import React from 'react';
import { useSelector } from 'react-redux';
import { selectNext5Days } from '../../app/WeatherSlice';
import { Next5DaysSection, Next5DaysList } from './SearchResults.styles';
import WeatherCard from '../WeatherCard/WeatherCard';

function Next5Days() {
  const next5Days = useSelector(selectNext5Days);

  return (
    <Next5DaysSection>
      <Next5DaysList>
        {next5Days?.map((day) => {
          return (
            <WeatherCard
              day={getDayOfWeek(day.Date)}
              temperature={formatTemperature(day.Temperature)}
            />
          );
        })}
      </Next5DaysList>
    </Next5DaysSection>
  );
}

function formatTemperature(temperature) {
  const min = temperature.Minimum;
  const max = temperature.Maximum;
  return {
    minimum: min.Unit === 'F' ? convertToC(min.Value) : min.Value,
    maximum: max.Unit === 'F' ? convertToC(max.Value) : max.Value,
  };
}

function convertToC(F) {
  return ((F - 32) * (5 / 9)).toFixed(1);
}

function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
}

export default Next5Days;
