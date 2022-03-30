import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../store';
import { Film } from '../types/film';
import { loadFilms } from './action';
import { APIRoute } from '../const';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const { data } = await api.get<Film[]>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);


