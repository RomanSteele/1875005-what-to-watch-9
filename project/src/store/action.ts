import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const updateGenre = createAction<string>('main/updateGenre');

export const loadFilms = createAction<Film[]>('data/loadFilms');
