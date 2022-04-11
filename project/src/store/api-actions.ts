import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.js';
import { Film } from '../types/film';
import { PushFilmToMyList } from '../types/my-list-films';
import { AuthData } from '../types/auth-data';
import { FilmReview } from '../types/film-review';
import { UserLoginData } from '../types/user-data';
import { CommentPost, UserCommentData } from '../types/comment-post';
import { saveToken, dropToken } from '../services/token';
import { handleHttpError  } from '../services/handle-http-error';

import { APIRoute, AuthorizationStatus, AppRoute, ApiType } from '../const';

import { redirectToRoute } from './action';
import { addComment, loadMyListFilms, commentSendStatus } from './slices/action-data/action-data';
import { loadUserData, requireAuthorization } from './slices/user-data/user-data';
import { loadFilms, loadComments, loadPromoFilm, loadSimilarFilms } from './slices/app-data/app-data';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.DataFetchFilms,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Film[]>(APIRoute.Films);
      dispatch(loadFilms(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number | null, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.DataFetchComments,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FilmReview[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadComments(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const postComment = createAsyncThunk<void, CommentPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.FilmPostComment,
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      dispatch(commentSendStatus(false));
      await api.post<UserCommentData>(`${APIRoute.CommentPost}${id}`, { comment, rating });
      dispatch(commentSendStatus(true));
      dispatch(addComment({ id, comment, rating }));
      dispatch(redirectToRoute(`/films/${id}`));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const fetchUserAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.UserData,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserLoginData>(APIRoute.Login);
      dispatch(loadUserData(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const fetchMyListFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.FetchMyListFilm,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Film[]>(APIRoute.MyListFilms);
      dispatch(loadMyListFilms(data));
    } catch (error) {
      handleHttpError(error);
    }
  },
);

export const addMyListFilm = createAsyncThunk<void, PushFilmToMyList, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.AddMyListFilm,
  async ({ id, status }, { dispatch, extra: api }) => {
    try {
      await api.post<Film>(`${APIRoute.MyListFilms}/${id}/${status}`, { id, status });
      dispatch(fetchMyListFilm());
    } catch (error) {
      handleHttpError(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.DataFetchPromo,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Film>(APIRoute.Promo);
      dispatch(loadPromoFilm(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number | null, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.DataLoadSimilarFilms,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
      dispatch(loadSimilarFilms(data));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.UserCheckAuth,
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(fetchMyListFilm());
      dispatch(requireAuthorization(AuthorizationStatus.Authorized));
    } catch (error) {
      handleHttpError (error);
      dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.UserLogin,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserLoginData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(loadUserData(data));
      dispatch(fetchMyListFilm());
      dispatch(requireAuthorization(AuthorizationStatus.Authorized));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      handleHttpError (error);
      dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ApiType.UserLogout,
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    } catch (error) {
      handleHttpError (error);
    }
  },
);

