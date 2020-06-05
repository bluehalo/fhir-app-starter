/**
 * sagas
 */

import { all, put, call, takeEvery } from 'redux-saga/effects';
import connect from '../../services/FhirClient';

import { LOAD_PATIENT_INFO } from './constants';
import { loadPatientInfoActionError, loadPatientInfoActionSuccess } from './actions';

const wrapper = (client, query) => {
  return client.request(query, { pageLimit: 2, flat: true });
};

function* loadPatientInfo() {
  try {
    const client = yield call(connect);
    const patient = yield call(client.patient.read);

    const conditions = yield call(
      wrapper,
      client,
      `Condition?patient=${patient.id}&clinicalstatus=active`,
    );

    yield put(loadPatientInfoActionSuccess(patient));
    yield put({ type: 'Home/LOAD_CONDITION_SUCCESS', payload: conditions });
  } catch (e) {
    yield put(loadPatientInfoActionError(e));
  }
}

export default function* root() {
  yield all([takeEvery(LOAD_PATIENT_INFO, loadPatientInfo)]);
}
