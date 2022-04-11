import { createSlice } from '@reduxjs/toolkit';
import { ActionData } from '../../../types/state';
import { NameSpace } from '../../../const';

const initialState: ActionData = {
  userComment: {
    id: 0,
    comment: '',
    rating: 0,
  },
  genre: 'All genres',
  myListFilms: [],
  isLoading: true,
};

export const actionData = createSlice ({
  name: NameSpace.Action,
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.userComment = action.payload;
    },
    updateGenre: (state, action) => {
      state.genre = action.payload;
    },
    loadMyListFilms: (state, action) => {
      state.myListFilms = action.payload;
    },
    changeLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addComment, updateGenre, loadMyListFilms, changeLoadingStatus } = actionData.actions;
