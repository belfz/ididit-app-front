import { combineReducers } from 'redux';
import authReducer from './authReducer';
import achievementsReducer from './achievementsReducer';

const reducer = combineReducers({
  authReducer,
  achievementsReducer
});

export default reducer;
