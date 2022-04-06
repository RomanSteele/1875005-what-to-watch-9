import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { UserData } from '../../../types/state';

const initialState: UserData = {
  userLoginData: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
};

export const userLoginData = createSlice ({
  name: NameSpace.userData,
  initialState,
  reducers: {
    loadUserData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const { loadUserData } = userLoginData.actions;
