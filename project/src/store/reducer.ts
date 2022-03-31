import { createReducer } from '@reduxjs/toolkit';
import { updateGenre, loadFilms, requireAuthorization } from './action';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';

const startGenre = 'All genres';

type InitialState = {
  films: Film[],
  genre: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
}

const initialState: InitialState = {
  films: [],
  genre: startGenre,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateGenre, (state, action) =>{
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
