import { Stars } from './types/stars';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  FilmPage = '/films',
  Review = '/films/:id/review',
  PlayerFilm = '/player/:id',
  Player = '/player/',
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
  Promo = '/promo',
  MyListFilms = '/favorite',
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
  User = 'USER',
  Data = 'DATA',
  Action = 'ACTION',
}

export enum ApiType {
  UserLogout = 'user/logout',
  UserLogin = 'user/login',
  UserCheckAuth = 'user/checkAuth',
  DataLoadSimilarFilms = 'data/loadSimilarFilms',
  DataFetchPromo = 'data/fetchPromo',
  AddMyListFilm = 'film/addMyListFilm',
  FetchMyListFilm = 'data/fetchMyListFilm',
  UserData = 'user/userData',
  FilmPostComment = 'film/postComment',
  DataFetchComments = 'data/fetchComments',
  DataFetchFilms = 'data/fetchFilms',
}

export enum PlayerActiveStatus {
  RefPlay = '#play-s',
  RefPause = '#pause',
  Play = 'Play',
  Pause = 'Pause'
}

export enum GenresStart {
  AllGenres = 'All genres',
}

export enum TimeConvertion {
  SecondsInMinute = 60,
  MilisecondsInSecond = 1000,
  SetPercent = 100,
  NumberAfterParse = 3,
  Limit = 4,
}
