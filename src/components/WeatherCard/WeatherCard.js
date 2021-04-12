import React from 'react';
import { Wrapper, Title, WeatherText } from './WeatherCard.styles';

function WeatherCard({ day, temperature, weatherText }) {
  return (
    <Wrapper>
      <Title>{day}</Title>
      <span>
        From {temperature.minimum}'C To {temperature.maximum}'C
      </span>
      <WeatherText>
        <img
          src='https://img.icons8.com/color/48/000000/smiling-sun.png'
          alt='sun'
          height='25px'
        />
        <p>{weatherText.byDay}</p>
      </WeatherText>
      <WeatherText>
        <img
          src='https://img.icons8.com/emoji/48/000000/full-moon-face.png'
          alt='night'
          height='25px'
        />
        <p>{weatherText.byNight}</p>
      </WeatherText>
    </Wrapper>
  );
}

export default WeatherCard;
