import { makeUserEmptyLoginData, makeFakeUserLoginData   } from '../../../utils/mocks';
import { userData, requireAuthorization, loadUserData } from './user-data';
import { AuthorizationStatus } from '../../../const';

const userLoginEmptyData = makeUserEmptyLoginData();
const userLoginData = makeFakeUserLoginData();

describe('Reducer: userData', () => {

  describe('Function: loadUserData', () => {
    it('without additional parameters should return initial state', () => {
      expect(userData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
        .toEqual({ userLoginData: userLoginEmptyData });
    });

    it('should update user data by load user data', () => {
      const state = { userLoginData: userLoginEmptyData, authorizationStatus: AuthorizationStatus.NotAuthorized  };
      expect(userData.reducer(state, loadUserData(userLoginData)))
        .toEqual({ userLoginData });
    });

    describe('Function: requireAuthorization', () => {
      it('without additional parameters should return initial state', () => {
        expect(userData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
          .toEqual({ authorizationStatus: AuthorizationStatus.Unknown });
      });

      it('should update authorizationStatus to "AUTH"', () => {
        const state = { userLoginData: userLoginEmptyData, authorizationStatus: AuthorizationStatus.NotAuthorized };
        expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.Authorized)))
          .toEqual({ authorizationStatus: AuthorizationStatus.Authorized });
      });

      it('should update authorizationStatus to "NO_AUTH"', () => {
        const state = { userLoginData: userLoginEmptyData, authorizationStatus: AuthorizationStatus.NotAuthorized };
        expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.NotAuthorized)))
          .toEqual({ authorizationStatus: AuthorizationStatus.NotAuthorized });
      });
    });
  });
});
