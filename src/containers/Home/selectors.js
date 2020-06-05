/**
 * The global state selectors
 */

// import { createSelector } from 'reselect';
// import { initialState } from './reducers';
import _ from 'lodash';

export const getReady = state => {
  return _.get(state, 'app.smart.user');
};

export const getConditions = state => {
  return _.get(state, 'home.conditions');
};

export const getError = state => {
  return _.get(state, 'home.error');
};

export default getReady;
