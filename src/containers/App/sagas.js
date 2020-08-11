/**
 * sagas
 */

import { put, all, call, takeEvery } from 'redux-saga/effects';
import { LOAD_SMART_INFO } from './constants';
import { addSmartInformationAction, addSmartInformationErrorAction } from './actions';

import connect from '../../services/FhirClient';

export function* loadSmartInfo() {
  try {
    const client = yield call(connect);
    yield put(addSmartInformationAction(client));
  } catch (e) {
    yield put(addSmartInformationErrorAction(e));
  }
}

export default function* root() {
  yield all([takeEvery(LOAD_SMART_INFO, loadSmartInfo)]);
}
