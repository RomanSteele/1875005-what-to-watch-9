import { createSlice } from '@reduxjs/toolkit';
import { NameSpaceNew, AuthorizationStatus } from '../../../const';
import { UserData } from '../../../types/state';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userLoginData: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
};

export const userData = createSlice ({
  name: NameSpaceNew.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    loadUserData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const { requireAuthorization, loadUserData } = userData.actions;
