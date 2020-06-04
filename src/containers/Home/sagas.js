/**
 * sagas
 */

import { all, put, call, takeEvery } from 'redux-saga/effects';
import connect from '../../services/FhirClient';

import { LOAD_PATIENT_INFO } from './constants';
import { loadPatientInfoActionError, loadPatientInfoActionSuccess } from './actions';

function* loadPatientInfo() {
  try {
    const client = yield call(connect);
    const patient = yield call(client.patient.read);
    yield put(loadPatientInfoActionSuccess(patient));
  } catch (e) {
    yield put(loadPatientInfoActionError(e));
  }
}

export default function* root() {
  yield all([takeEvery(LOAD_PATIENT_INFO, loadPatientInfo)]);
}
