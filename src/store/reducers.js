/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import globalReducer from '../containers/App/reducers';
import homeReducer from '../containers/Home/reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const rootReducer = combineReducers({
  global: globalReducer,
  home: homeReducer,
});

export default rootReducer;
