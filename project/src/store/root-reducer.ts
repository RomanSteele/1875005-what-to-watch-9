import { combineReducers } from '@reduxjs/toolkit';
import { NameSpaceNew } from '../const';
import { data } from './slices/data/data';
import { userData } from './slices/user-data/user-data';
import { actionData } from './slices/action-data/action-data';


export const rootReducer = combineReducers({
  [NameSpaceNew.data]: data.reducer,
  [NameSpaceNew.user]: userData.reducer,
  [NameSpaceNew.action]: actionData.reducer,
});
