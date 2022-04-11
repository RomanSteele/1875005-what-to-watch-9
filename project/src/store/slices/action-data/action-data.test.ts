import { makeUserData, makeUserEmptyData, makeFakeGenre, makeFakeFilmsItem  } from '../../../utils/mocks';
import { actionData, addComment, updateGenre, loadMyListFilms } from './action-data';

const userComment = makeUserData();
const userEmptyInfo = makeUserEmptyData();
const currentGenre = makeFakeGenre();
const myListFilms = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));

describe('Reducer: actionData', () => {
  const state = { userComment: userEmptyInfo, genre: 'All genres', myListFilms: [], isLoading: true };

  describe('Function: addComment', () => {
    it('without additional parameters should return initial state', () => {
      expect(actionData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
        .toEqual({ ...state, userComment: userEmptyInfo });
    });

    it('should update comments by load comments', () => {
      expect(actionData.reducer(state, addComment(userComment)))
        .toEqual({ ...state, userComment });
    });


    describe('Function: updateGenre', () => {
      it('without additional parameters should return initial state', () => {
        expect(actionData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ ...state, genre: 'All genres' });
      });

      it('should update genres by load genres', () => {
        expect(actionData.reducer(state, updateGenre(currentGenre)))
          .toEqual( { ...state, genre: currentGenre });
      });
    });


    describe('Function: loadMyListFilms', () => {
      it('without additional parameters should return initial state', () => {
        expect(actionData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ ...state, myListFilms: [] });
      });

      it('should update films by load films', () => {
        expect(actionData.reducer(state, loadMyListFilms(myListFilms)))
          .toEqual({ ...state, myListFilms });
      });
    });
  });
});
