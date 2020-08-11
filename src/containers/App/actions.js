/**
 * @module Actions/App
 * @desc App Actions
 */
import { LOAD_SMART_INFO, LOAD_SMART_INFO_SUCCESS, LOAD_SMART_INFO_FAILURE } from './constants';

export const loadSmartInfoAction = () => ({ type: LOAD_SMART_INFO });

export const addSmartInformationAction = (client) => ({
  type: LOAD_SMART_INFO_SUCCESS,
  payload: client,
});

export const addSmartInformationErrorAction = () => ({
  type: LOAD_SMART_INFO_FAILURE,
  payload: {
    header: 'Unconnected to a FHIR Server',
    body: 'Make sure you launch from a SMART on FHIR Sandbox',
  },
});
