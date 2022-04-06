import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { authorizationData } from './slices/authorization-data/authorization-data';
import { postCommentData } from './slices/comment-post-data/comment-post-data';
import { commentsData } from './slices/comments-data/comments-data';
import { currentGenre } from './slices/current-genre-data/current-genre-data';
import { filmsData } from './slices/films-data/films-data';
import { promoFilmData } from './slices/promo-film-data/promo-film-data';
import { similarFilmsData } from './slices/similar-films-data/similar-films-data';
import { userLoginData } from './slices/user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpace.authorizationData]: authorizationData.reducer,
  [NameSpace.postUserComment]: postCommentData.reducer,
  [NameSpace.commentsData]: commentsData.reducer,
  [NameSpace.currentGenre]: currentGenre.reducer,
  [NameSpace.promoFilmData]: promoFilmData.reducer,
  [NameSpace.similarFilmsData]: similarFilmsData.reducer,
  [NameSpace.userData]: userLoginData.reducer,
  [NameSpace.filmsData]: filmsData.reducer,
});
