import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { FilmReview } from '../types/film-review';
import { CommentPost } from '../types/comment-post';
import { AuthorizationStatus, AppRoute } from '../const';
import { UserLoginData } from '../types/user-data';

export const updateGenre = createAction<string>('main/updateGenre');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');

export const loadComments = createAction<FilmReview[]>('data/loadComments');

export const loadPromoFilm = createAction<Film>('data/setPromoFilm');

export const addComment = createAction<CommentPost>('data/addComment');

export const loadSimilarFilms = createAction<Film[]>('data/loadSimilarFilms');

export const loadUserData = createAction<UserLoginData>('user/loadUserData');
