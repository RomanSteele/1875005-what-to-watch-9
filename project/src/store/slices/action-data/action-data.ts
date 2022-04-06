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
};

export const actionData = createSlice ({
  name: NameSpace.action,
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log(action.payload);
      state.userComment = action.payload;
    },
    updateGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { addComment, updateGenre } = actionData.actions;
