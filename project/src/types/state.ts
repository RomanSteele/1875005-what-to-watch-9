import { store } from '../store/index';
import { Film } from './film';
import { FilmReview } from './film-review';
import { UserLoginData } from './user-data';
import { CommentPost } from './comment-post';
import { AuthorizationStatus } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Data = {
  films: Film[],
  isDataLoaded: boolean,
  comments: FilmReview[],
  promoFilm: Film,
  similarFilms: Film[],
};

export type ActionData = {
  genre: string,
  userComment: CommentPost,
  myListFilms: Film[],
};

export type UserData = {
  authorizationStatus: AuthorizationStatus,
  userLoginData: UserLoginData,
};
