/**
 * sagas
 */

import { all, put, call, takeEvery } from 'redux-saga/effects';
import FhirClient from '../../services/FhirClient';

import { LOAD_PATIENT_INFO } from './constants';
import { loadPatientInfoActionError, loadPatientInfoActionSuccess } from './actions';

function* loadPatientInfo() {
  try {
    const patient = yield call(FhirClient.getPatient);
    yield put(loadPatientInfoActionSuccess(patient));
  } catch (e) {
    yield put(loadPatientInfoActionError(e));
  }
}

export default function* root() {
  yield all([takeEvery(LOAD_PATIENT_INFO, loadPatientInfo)]);
}
