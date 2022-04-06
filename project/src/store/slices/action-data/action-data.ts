import { createSlice } from '@reduxjs/toolkit';
import { NameSpaceNew } from '../../../const';
import { ActionData } from '../../../types/state';

const initialState: ActionData = {
  userComment: {
    id: 0,
    comment: '',
    rating: 0,
  },
  genre: 'All genres',
};

export const actionData = createSlice ({
  name: NameSpaceNew.action,
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.userComment = action.payload;
    },
    updateGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { addComment, updateGenre } = actionData.actions;
