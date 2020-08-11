/**
 * The global state selectors
 */

// import { createSelector } from 'reselect';
// import { initialState } from './reducers';
import _ from 'lodash';

export const getReady = (state) => {
  return _.get(state, 'app.smart.user');
};

export default getReady;
