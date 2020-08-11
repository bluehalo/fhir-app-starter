/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { LOAD_PATIENT_INFO_ERROR, LOAD_PATIENT_INFO_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  container: 'Home',
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PATIENT_INFO_SUCCESS:
        draft.patient = action.payload;
        break;
      case LOAD_PATIENT_INFO_ERROR:
        draft.patient = {
          error: 'Something went wrong',
        };
        break;
      default:
        break;
    }
  });

export default homeReducer;
