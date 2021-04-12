import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [
    {
      location: { id: 215854, name: 'Tel Aviv' },
      currentWeather: {
        temperature: 15.5,
        weatherText: 'Partly cloudy',
      },
    },
  ],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.unshift(action.payload);
      state.favorites = Array.reduce((acc, item) => {
        if (!acc.includes(item.location.id)) acc.push(item);

        return acc;
      }, state.favorites);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.location.id !== action.payload.location.id,
      );
    },
    updateFavorites: (state, action) => {
      if (!Array.isArray(action.payload)) {
        return (state.favorites = updateOneFavorite(
          action.payload,
          state.favorites,
        ));
      }

      const ids = state.favorites.map((item) => item.location.id);
      const relevantPayload = action.payload.filter((item) =>
        ids.includes(item.location.id),
      );

      for (let item of relevantPayload) {
        updateOneFavorite(item, state.favorites);
      }
    },
  },
});

function updateOneFavorite(payload, favorites) {
  return favorites.map((item) => {
    if (item.location.id === payload.location.id) return payload;

    return item;
  });
}

export const {
  changeFavorites,
  addFavorite,
  deleteFavorite,
  updateFavorites,
} = favoritesSlice.actions;

export const selectFavorites = (state) => {
  return state.favorites.favorites;
};

export default favoritesSlice.reducer;
