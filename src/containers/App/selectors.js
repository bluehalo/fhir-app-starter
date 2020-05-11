/**
 * The App state selectors
 */

import { createSelector } from 'reselect';

export const getApp = state => state.app;

export const getConfig = createSelector([getApp], app => {
  return app.config;
});
