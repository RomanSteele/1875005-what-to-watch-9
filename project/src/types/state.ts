import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Film } from './film';
import { CommentPost } from './comment-post';
import { FilmReview } from './film-review';
import { UserLoginData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FilmsData = {
  films: Film[],
  isDataLoaded: boolean,
};

export type CurrentGenre = {
  genre: string,
};

export type AuthorizationData = {
  authorizationStatus: AuthorizationStatus
};

export type CommentsData = {
  comments: FilmReview[],
  isDataLoaded: boolean,
};

export type PromoFilmData = {
  promoFilm: Film,
  isDataLoaded: boolean,
};

export type PostUserComment = {
  userComment: CommentPost,
}

export type SimilarFilmsData = {
  similarFilms: Film[],
  isDataLoaded: boolean,
}

export type UserData = {
  userLoginData: UserLoginData,
}

export type ErrorData = {
  error: string,
}
