import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Film } from './film';
import { CommentPost } from './comment-post';
import { FilmReview } from './film-review';
import { UserLoginData } from './user-data';

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
};

export type UserData = {
  authorizationStatus: AuthorizationStatus,
  userLoginData: UserLoginData,
};
