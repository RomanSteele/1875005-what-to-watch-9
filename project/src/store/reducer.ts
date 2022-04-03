import { createReducer } from '@reduxjs/toolkit';
import { updateGenre, loadFilms, requireAuthorization, loadComments, loadPromoFilm, loadSimilarFilms, userData } from './action';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';
import { FilmReview } from '../types/film-review';
import { CommentPost } from '../types/comment-post';
import { addComment } from './action';
import { UserLoginData } from '../types/user-data';

const startGenre = 'All genres';

const startPromoFilm = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [''],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

const startUserComment = {
  id: 0,
  comment: '',
  rating: 0,
};

const startUserLoginData ={
  avatarUrl: '',
  email: '',
  id: 0,
  name: '',
  token: '',
};

type InitialState = {
  films: Film[],
  genre: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  comments: FilmReview[],
  promoFilm: Film,
  userComment: CommentPost,
  similarFilms: Film[],
  userLoginData: UserLoginData,
}

const initialState: InitialState = {
  films: [],
  genre: startGenre,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  comments: [],
  promoFilm: startPromoFilm,
  userComment: startUserComment,
  similarFilms: [],
  userLoginData: startUserLoginData,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateGenre, (state, action) =>{
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(addComment, (state, action) => {
      state.userComment = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(userData, (state, action) => {
      state.userLoginData = action.payload;
    });
});

export { reducer };
