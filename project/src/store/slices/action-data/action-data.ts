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
};

export const actionData = createSlice ({
  name: NameSpace.action,
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
  },
});

export const { addComment, updateGenre, loadMyListFilms } = actionData.actions;
