import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { PostUserComment } from '../../../types/state';

const initialState: PostUserComment = {
  userComment: {
    id: 0,
    comment: '',
    rating: 0,
  },
};

export const postCommentData = createSlice ({
  name: NameSpace.postUserComment,
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.userComment = action.payload;
    },
  },
});

export const { addComment } = postCommentData.actions;
