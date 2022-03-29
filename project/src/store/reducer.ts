import { createReducer } from '@reduxjs/toolkit';
import { updateGenre, loadFilms } from './action';
import { Film } from '../types/film';

const startGenre = 'All genres';

type InitialState = {
  films: Film[],
  genre: string,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  films: [],
  genre: startGenre,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateGenre, (state, action) =>{
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    });
});

export { reducer };
