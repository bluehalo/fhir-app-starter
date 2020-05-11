/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import appReducer from '../containers/App/reducers';
import homeReducer from '../containers/Home/reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
});

export default rootReducer;
