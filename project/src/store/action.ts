import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AuthorizationStatus, AppRoute } from '../const';

export const updateGenre = createAction<string>('main/updateGenre');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
