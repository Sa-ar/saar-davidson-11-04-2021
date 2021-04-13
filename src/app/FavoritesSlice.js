import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action) => {
      if (
        state.favorites.find(
          (item) => item.location.id === action.payload.location.id,
        )
      )
        return;

      state.favorites.unshift(action.payload);
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
  isFavorite,
} = favoritesSlice.actions;

export const selectFavorites = (state) => {
  return state.favorites.favorites;
};

export default favoritesSlice.reducer;
