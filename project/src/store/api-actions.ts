import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../store';
import { Film } from '../types/film';
import {
  loadFilms,
  requireAuthorization,
  redirectToRoute,
  loadComments,
  loadPromoFilm,
  addComment,
  loadSimilarFilms,
  loadUserData } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { setErrorHandle } from '../services/error-handle';
import { AuthData } from '../types/auth-data';
import { UserData, UserLoginData } from '../types/user-data';
import { FilmReview } from '../types/film-review';
import { CommentPost, UserCommentData } from '../types/comment-post';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const { data } = await api.get<Film[]>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      setErrorHandle(error);
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
      setErrorHandle(error);
    }
  },
);

export const postComment = createAsyncThunk(
  'film/postComment',
  async ({ id, comment, rating }: CommentPost) => {
    try {
      const { data: { token } } = await api.post<UserCommentData>(`${APIRoute.CommentPost}${id}`, { comment, rating });
      saveToken(token);
      store.dispatch(addComment({ id, comment, rating }));
    } catch (error) {
      setErrorHandle(error);
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
      setErrorHandle(error);
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
      setErrorHandle(error);
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
      setErrorHandle(error);
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
      setErrorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Authorized));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      setErrorHandle(error);
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
      setErrorHandle(error);
    }
  },
);

