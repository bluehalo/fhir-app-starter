/**
 * The App state selectors
 */
import _ from 'lodash';

import { createSelector } from 'reselect';

export const getApp = (state) => state.app;

export const getSmartError = createSelector([getApp], (app) => {
  return app.error;
});

export const getSmartInfo = createSelector([getApp], (app) => {
  return app.smart;
});

export const getPatient = (state) => {
  return _.get(state, 'home.patient');
};
