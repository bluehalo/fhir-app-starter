/**
 * sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_CONFIG, LOAD_CONFIG_SUCCESS } from './constants';

import config from '../../config';

export function* loadConfig() {
  // replace the below with an action creator
  yield put({ type: LOAD_CONFIG_SUCCESS, payload: config });
}

export default function* root() {
  yield takeLatest(LOAD_CONFIG, loadConfig);
}
