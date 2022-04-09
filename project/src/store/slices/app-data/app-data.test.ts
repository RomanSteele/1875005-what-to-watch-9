import { makeFakeFilmComments, makeFilmEmptyItem, makeFakeFilmsItem   } from '../../../utils/mocks';
import { data, loadComments, loadFilms, loadPromoFilm, loadSimilarFilms } from './app-data';

const comments = makeFakeFilmComments();
const films = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));
const promoFilm = makeFakeFilmsItem();
const promoFilmEmpty = makeFilmEmptyItem();
const similarFilms = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));


describe('Reducer: data', () => {
  const state = { films: [], comments: [], promoFilm: promoFilmEmpty, similarFilms: [], isDataLoaded: false };

  describe('Function: loadComments', () => {
    it('without additional parameters should return initial state', () => {
      expect(data.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
        .toEqual({ ...state, comments: [], isDataLoaded: false });
    });

    it('should update comments by load comments', () => {
      expect(data.reducer(state, loadComments(comments)))
        .toEqual( { ...state, comments, isDataLoaded: true });
    });


    describe('Function: loadFilms', () => {
      it('without additional parameters should return initial state', () => {
        expect(data.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ ...state, films: [], isDataLoaded: false });
      });

      it('should update films by load films', () => {
        expect(data.reducer(state, loadFilms(films)))
          .toEqual({ ...state, films, isDataLoaded: true });
      });
    });


    describe('Function: loadPromoFilm', () => {
      it('without additional parameters should return initial state', () => {
        expect(data.reducer(state, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ ...state, promoFilm: promoFilmEmpty, isDataLoaded: false });
      });

      it('should update films by load films', () => {
        expect(data.reducer(state, loadPromoFilm(promoFilm)))
          .toEqual({ ...state, promoFilm, isDataLoaded: true });
      });
    });


    describe('Function: loadSimilarFilms', () => {
      it('without additional parameters should return initial state', () => {
        expect(data.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual( { ...state, similarFilms: [], isDataLoaded: false });
      });

      it('should update films by load films', () => {
        expect(data.reducer(state, loadSimilarFilms(similarFilms)))
          .toEqual({ ...state, similarFilms, isDataLoaded: true });
      });
    });
  });
});
