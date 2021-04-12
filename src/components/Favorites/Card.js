import React from 'react';
import { Title, Card as FavoritesCard } from './Favorites.styles';

function Card({ place, temperature, weatherText }) {
  return (
    <FavoritesCard>
      <Title>{place}</Title>
      <p>{temperature}'C</p>
      <p>{weatherText}</p>
    </FavoritesCard>
  );
}

export default Card;
