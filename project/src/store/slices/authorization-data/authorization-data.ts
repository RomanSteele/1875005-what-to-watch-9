import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../../const';
import { AuthorizationData } from '../../../types/state';

const initialState: AuthorizationData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const authorizationData = createSlice ({
  name: NameSpace.authorizationData,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { requireAuthorization } = authorizationData.actions;
