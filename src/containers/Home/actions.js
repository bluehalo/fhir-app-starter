/**
 * @module Actions/App
 * @desc App Actions
 */

import { LOAD_PATIENT_INFO, LOAD_PATIENT_INFO_SUCCESS, LOAD_PATIENT_INFO_ERROR } from './constants';

export const loadPatientInfoAction = () => ({
  type: LOAD_PATIENT_INFO,
});

export const loadPatientInfoActionSuccess = (patient) => ({
  type: LOAD_PATIENT_INFO_SUCCESS,
  payload: patient,
});

export const loadPatientInfoActionError = (e) => ({
  type: LOAD_PATIENT_INFO_ERROR,
  payload: e,
});
