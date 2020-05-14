/**
 * @module Actions/App
 * @desc App Actions
 */
import {
  LOAD_CONFIG,
  LOAD_SMART_INFO,
  LOAD_SMART_INFO_SUCCESS,
  LOAD_SMART_INFO_FAILURE,
  LOAD_CONFIG_SUCCESS,
} from './constants';

export const loadConfigAction = () => ({ type: LOAD_CONFIG });

export const loadSmartInfoAction = () => ({ type: LOAD_SMART_INFO });

export const addConfigAction = config => ({ type: LOAD_CONFIG_SUCCESS, payload: config });

export const addSmartInformationAction = client => ({
  type: LOAD_SMART_INFO_SUCCESS,
  payload: client,
});

export const addSmartInformationErrorAction = () => ({
  type: LOAD_SMART_INFO_FAILURE,
  payload: {
    header: 'Something went wrong!',
    body: 'Make sure you launch from a SMART on FHIR Sandbox',
  },
});
