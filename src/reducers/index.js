import { combineReducers } from 'redux';
import characters from './characterReducer';
// characters has to match what you call it in selectors

export default combineReducers({
  characters
});
