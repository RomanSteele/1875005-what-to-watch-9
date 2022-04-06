import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { PromoFilmData } from '../../../types/state';

const initialState: PromoFilmData = {
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
  isDataLoaded: false,
};

export const promoFilmData = createSlice ({
  name: NameSpace.promoFilmData,
  initialState,
  reducers: {
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const { loadPromoFilm } = promoFilmData.actions;
