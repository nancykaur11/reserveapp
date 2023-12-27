// rootReducer.js
import { combineReducers } from 'redux';
import travelReducer from '../reducer/Reducer';

const rootReducer = combineReducers({
  travel: travelReducer,
});
 console.log("----",travelReducer)
export default rootReducer;
