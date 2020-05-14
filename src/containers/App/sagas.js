/**
 * sagas
 */

import { put, all, call, takeEvery } from 'redux-saga/effects';
import { LOAD_CONFIG, LOAD_SMART_INFO } from './constants';
import {
  addConfigAction,
  addSmartInformationAction,
  addSmartInformationErrorAction,
} from './actions';

import FhirClient from '../../services/FhirClient';

import config from '../../config';

export function* loadConfig() {
  yield put(addConfigAction(config));
}

export function* loadSmartInfo() {
  try {
    const client = yield call(FhirClient.connect);
    console.log(client);
    yield put(addSmartInformationAction(client));
  } catch (e) {
    yield put(addSmartInformationErrorAction(e));
  }
}

export default function* root() {
  yield all([takeEvery(LOAD_CONFIG, loadConfig), takeEvery(LOAD_SMART_INFO, loadSmartInfo)]);
}
