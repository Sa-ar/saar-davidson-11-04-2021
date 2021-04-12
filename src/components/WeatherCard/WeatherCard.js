import React from 'react';
import { Wrapper, Title } from './WeatherCard.styles';

function WeatherCard({ day, temperature }) {
  return (
    <Wrapper>
      <Title>{day}</Title>
      <span>
        From {temperature.minimum}'C To {temperature.maximum}'C
      </span>
    </Wrapper>
  );
}

export default WeatherCard;
