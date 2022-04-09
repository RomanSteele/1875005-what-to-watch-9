import { datatype, random, name, lorem, internet, date } from 'faker';
import { CommentPost } from '../types/comment-post';
import { Film } from '../types/film';
import { FilmReview } from '../types/film-review';
import { UserLoginData } from '../types/user-data';

export const makeUserEmptyData = (): CommentPost => ({
  id: 0,
  comment: '',
  rating: 0,
} as unknown as CommentPost);

export const makeUserData = (): CommentPost => ({
  id: datatype.number,
  comment: datatype.string,
  rating: datatype.float({ min: 1, max: 10 }),
} as unknown as CommentPost);

export const makeFakeGenre = (): string => ({
  genre: random.word,
} as unknown as string);

export const makeFakeFilmsItem = (): Film => ({
  id: datatype.number,
  name: random.word,
  posterImage: random.image,
  previewImage: random.image,
  backgroundImage: random.image,
  backgroundColor: internet.color,
  videoLink: 'https://9.react.pages.academy/static/film/video/bubbles.mp4',
  previewVideoLink: 'https://9.react.pages.academy/static/film/video/bubbles.mp4',
  description: lorem.text,
  rating: datatype.float({ min: 1, max: 10 }),
  scoresCount: datatype.number,
  director: name.findName,
  starring: [name.findName],
  runTime: datatype.float({ min: 30 }),
  genre: random.word,
  released: datatype.float({ min: 1800 }),
  isFavorite: datatype.boolean,
} as unknown as Film);

export const makeFakeFilmComments = (): FilmReview[] => ({
  comments: new Array(3).fill(null).map(() => ({
    comment: datatype.string,
    date: date.between,
    id: datatype.number,
    rating: datatype.float({ min: 1, max: 10 }),
    user: {
      id: datatype.number,
      name: name.findName,
    },
  })),
} as unknown as FilmReview[]);

export const makeFilmEmptyItem = (): Film => ({
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
} as Film);

export const makeUserEmptyLoginData = (): UserLoginData => ({
  avatarUrl: '',
  email: '',
  id: 0,
  name: '',
  token: '',
} as UserLoginData);

export const makeFakeUserLoginData = (): UserLoginData => ({
  avatarUrl: random.image,
  email: internet.email,
  id: datatype.number,
  name: name.findName,
  token: random.word,
} as unknown as UserLoginData);
