import { makeFakeFilmComments, makeFilmEmptyItem, makeFakeFilmsItem   } from '../../../utils/mocks';
import { data, loadComments, loadFilms, loadPromoFilm, loadSimilarFilms } from './app-data';

const comments = makeFakeFilmComments();
const films = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));
const promoFilm = makeFakeFilmsItem();
const promoFilmEmpty = makeFilmEmptyItem();
const similarFilms = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));

describe('Reducer: data', () => {

  describe('Function: loadComments', () => {
    it('without additional parameters should return initial state', () => {
      expect(data.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
        .toEqual({ comments: [], isDataLoaded: false });
    });

    it('should update comments by load comments', () => {
      const state = { films: [], comments: [], promoFilm: promoFilmEmpty, similarFilms: [], isDataLoaded: false };
      expect(data.reducer(state, loadComments(comments)))
        .toEqual({ comments, isDataLoaded: true });
    });


    describe('Function: loadFilms', () => {
      it('without additional parameters should return initial state', () => {
        expect(data.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ films: [], isDataLoaded: false });
      });

      it('should update films by load films', () => {
        const state = { films: [], comments: [], promoFilm: promoFilmEmpty, similarFilms: [], isDataLoaded: false };
        expect(data.reducer(state, loadFilms(films)))
          .toEqual({ films, isDataLoaded: true });
      });
    });


    describe('Function: loadPromoFilm', () => {
      it('without additional parameters should return initial state', () => {
        expect(data.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ promoFilm: promoFilmEmpty, isDataLoaded: false });
      });

      it('should update films by load films', () => {
        const state = { films: [], comments: [], promoFilm: promoFilmEmpty, similarFilms: [], isDataLoaded: false };
        expect(data.reducer(state, loadPromoFilm(promoFilm)))
          .toEqual({ promoFilm, isDataLoaded: true });
      });
    });


    describe('Function: loadSimilarFilms', () => {
      it('without additional parameters should return initial state', () => {
        expect(data.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ similarFilms: [], isDataLoaded: false });
      });

      it('should update films by load films', () => {
        const state = { films: [], comments: [], promoFilm: promoFilmEmpty, similarFilms: [], isDataLoaded: false };
        expect(data.reducer(state, loadSimilarFilms(similarFilms)))
          .toEqual({ similarFilms, isDataLoaded: true });
      });
    });
  });
});
