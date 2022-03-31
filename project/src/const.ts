import { Stars } from './types/stars';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
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

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
