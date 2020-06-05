/**
 * The App state selectors
 */
import _ from 'lodash';

import { createSelector } from 'reselect';

export const getApp = state => state.app;

export const getSmartError = state => {
  return _.get(state, 'app.smart.error') || _.get(state, 'home.error');
};

export const getSmartInfo = createSelector([getApp], app => {
  return _.get(app, 'smart');
});

export const getPatient = state => {
  return _.get(state, 'home.patient');
};
