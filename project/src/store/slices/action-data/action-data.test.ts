import { makeUserData, makeUserEmptyData, makeFakeGenre, makeFakeFilmsItem  } from '../../../utils/mocks';
import { actionData, addComment, updateGenre, loadMyListFilms } from './action-data';

const userComment = makeUserData();
const userEmptyInfo = makeUserEmptyData();
const currentGenre = makeFakeGenre();
const myListFilms = new Array(10).fill(null).map(() => ({ makeFakeFilmsItem }));

describe('Reducer: actionData', () => {

  describe('Function: addComment', () => {
    it('without additional parameters should return initial state', () => {
      expect(actionData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
        .toEqual({ userComment: userEmptyInfo });
    });

    it('should update comments by load comments', () => {
      const state = { userComment: userEmptyInfo, genre: 'All genres', myListFilms: [] };
      expect(actionData.reducer(state, addComment(userComment)))
        .toEqual({ userComment });
    });


    describe('Function: updateGenre', () => {
      it('without additional parameters should return initial state', () => {
        expect(actionData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ genre: 'All genres' });
      });

      it('should update genres by load genres', () => {
        const state = { userComment: userEmptyInfo, genre: 'All genres', myListFilms: [] };
        expect(actionData.reducer(state, updateGenre(currentGenre)))
          .toEqual({ currentGenre });
      });
    });


    describe('Function: loadMyListFilms', () => {
      it('without additional parameters should return initial state', () => {
        expect(actionData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ favoriteFilms: [] });
      });

      it('should update films by load films', () => {
        const state = { userComment: userEmptyInfo, genre: 'All genres', myListFilms: [] };
        expect(actionData.reducer(state, loadMyListFilms(myListFilms)))
          .toEqual({ myListFilms });
      });
    });
  });
});
