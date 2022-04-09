import { makeUserEmptyLoginData, makeFakeUserLoginData   } from '../../../utils/mocks';
import { userData, requireAuthorization, loadUserData } from './user-data';
import { AuthorizationStatus } from '../../../const';

const userLoginEmptyData = makeUserEmptyLoginData();
const userLoginData = makeFakeUserLoginData();

describe('Reducer: userData', () => {

  describe('Function: loadUserData', () => {
    const state = { userLoginData: userLoginEmptyData, authorizationStatus: AuthorizationStatus.NotAuthorized  };

    it('without additional parameters should return initial state', () => {
      expect(userData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Unknown, userLoginData: userLoginEmptyData });
    });

    it('should update user data by load user data', () => {
      expect(userData.reducer(state, loadUserData(userLoginData)))
        .toEqual({ ...state, userLoginData });
    });

    describe('Function: requireAuthorization', () => {
      it('without additional parameters should return initial state', () => {
        expect(userData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ ...state, authorizationStatus: AuthorizationStatus.Unknown });
      });

      it('should update authorizationStatus to "AUTH"', () => {
        expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.Authorized)))
          .toEqual({ ...state, authorizationStatus: AuthorizationStatus.Authorized });
      });

      it('should update authorizationStatus to "NO_AUTH"', () => {
        expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.NotAuthorized)))
          .toEqual({ ...state, authorizationStatus: AuthorizationStatus.NotAuthorized });
      });
    });
  });
});
