import auth from 'src/ducks/auth/auth';
import hotels from 'src/ducks/hotels/hotels';
import comments from 'src/ducks/comments/comments';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth,
  hotels,
  comments,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
