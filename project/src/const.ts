import { Stars } from './types/stars';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  FilmPage = '/films',
  Review = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404',
}

export enum AuthorizationStatus {
  Authorized = 'AUTH',
  NotAuthorized = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  CommentPost = '/comments/',
  Promo = '/promo'
}

export const STARS: Stars[] = [
  { 'id': 10 },
  { 'id': 9 },
  { 'id': 8 },
  { 'id': 7 },
  { 'id': 6 },
  { 'id': 5 },
  { 'id': 4 },
  { 'id': 3 },
  { 'id': 2 },
  { 'id': 1 },
];

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  authorizationData = 'AUTHORIZATION_DATA',
  userData = 'USER_DATA',
  filmsData = 'FILMS_DATA',
  promoFilmData = 'PROMO_FILM_DATA',
  similarFilmsData = 'SIMILAR_FILMS_DATA',
  currentGenre = 'CURRENT_GENRE',
  commentsData = 'COMMENTS_DATA',
  postUserComment = 'POST_USER_COMMENT',
  setFilmsError = 'FILM_SET_ERROR',
}
