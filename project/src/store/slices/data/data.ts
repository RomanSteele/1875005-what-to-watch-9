import { createSlice } from '@reduxjs/toolkit';
import { NameSpaceNew } from '../../../const';
import { Data } from '../../../types/state';

const initialState: Data = {
  films: [],
  comments: [],
  promoFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  similarFilms: [],
  isDataLoaded: false,
};

export const data = createSlice ({
  name: NameSpaceNew.data,
  initialState,
  reducers: {
    loadComments: (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = true;
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const { loadFilms, loadComments, loadPromoFilm, loadSimilarFilms } = data.actions;
