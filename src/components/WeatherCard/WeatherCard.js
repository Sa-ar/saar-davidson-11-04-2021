import React from 'react';
import { Wrapper, Title } from './WeatherCard.styles';

function WeatherCard({ day, temperature }) {
  return (
    <Wrapper>
      <Title>{day}</Title>
      <span>{temperature}'C</span>
    </Wrapper>
  );
}

export default WeatherCard;
