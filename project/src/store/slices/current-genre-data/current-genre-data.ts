import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { CurrentGenre } from '../../../types/state';

const initialState: CurrentGenre = {
  genre: 'All genres',
};

export const currentGenre = createSlice ({
  name: NameSpace.currentGenre,
  initialState,
  reducers: {
    updateGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { updateGenre } = currentGenre.actions;
