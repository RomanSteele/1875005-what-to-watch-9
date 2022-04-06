import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { FilmsData } from '../../../types/state';

const initialState: FilmsData = {
  films: [],
  isDataLoaded: false,
};

export const filmsData = createSlice ({
  name: NameSpace.filmsData,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const { loadFilms } = filmsData.actions;
