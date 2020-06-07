import user from 'src/ducks/user/user';
import hotels from 'src/ducks/hotels/hotels';
import favorite from 'src/ducks/favorite/favorite';
import comments from 'src/ducks/comments/comments';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  user,
  hotels,
  favorite,
  comments,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
