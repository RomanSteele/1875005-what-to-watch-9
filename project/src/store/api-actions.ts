import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../store';
import { Film } from '../types/film';
import { PushFilmToMyList } from '../types/my-list-films';
import { AuthData } from '../types/auth-data';
import { FilmReview } from '../types/film-review';
import { UserLoginData } from '../types/user-data';
import { CommentPost, UserCommentData } from '../types/comment-post';
import { saveToken, dropToken } from '../services/token';
import { handleHttpError  } from '../services/handle-http-error';

import { APIRoute, AuthorizationStatus, AppRoute } from '../const';

import { redirectToRoute } from './action';
import { addComment, loadMyListFilms } from './slices/action-data/action-data';
import { loadUserData, requireAuthorization } from './slices/user-data/user-data';
import { loadFilms, loadComments, loadPromoFilm, loadSimilarFilms } from './slices/app-data/app-data';


export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const { data } = await api.get<Film[]>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: number | null) => {
    try {
      const { data } = await api.get<FilmReview[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const postComment = createAsyncThunk(
  'film/postComment',
  async ({ id, comment, rating }: CommentPost) => {
    try {
      await api.post<UserCommentData>(`${APIRoute.CommentPost}${id}`, { comment, rating });
      store.dispatch(addComment({ id, comment, rating }));
      //store.dispatch(fetchCommentsAction());
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const fetchUserAction = createAsyncThunk(
  'user/userData',
  async () => {
    try {
      const { data } = await api.get<UserLoginData>(APIRoute.Login);
      store.dispatch(loadUserData(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const fetchMyListFilm = createAsyncThunk(
  'data/fetchMyListFilm',
  async () => {
    try {
      const { data } = await api.get<Film[]>(APIRoute.MyListFilms);
      store.dispatch(loadMyListFilms(data));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

export const addMyListFilm = createAsyncThunk(
  'film/addMyListFilm',
  async ({ id, status }: PushFilmToMyList) => {
    try {
      await api.post<Film>(`${APIRoute.MyListFilms}/${id}/${status}`, { id, status });
      store.dispatch(fetchMyListFilm());
    } catch (error) {
      handleHttpError(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    try {
      const { data } = await api.get<Film>(APIRoute.Promo);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk(
  'data/loadSimilarFilms',
  async (id: number | null) => {
    try {
      const { data } = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(loadSimilarFilms(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Authorized));
    } catch (error) {
      handleHttpError (error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data } = await api.post<UserLoginData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      store.dispatch(loadUserData(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Authorized));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      handleHttpError (error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

