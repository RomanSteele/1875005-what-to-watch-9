import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { data } from './slices/app-data/app-data';
import { userData } from './slices/user-data/user-data';
import { actionData } from './slices/action-data/action-data';


export const rootReducer = combineReducers({
  [NameSpace.data]: data.reducer,
  [NameSpace.user]: userData.reducer,
  [NameSpace.action]: actionData.reducer,
});
