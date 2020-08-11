/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import produce from 'immer';
import _ from 'lodash';

import { LOAD_SMART_INFO_SUCCESS, LOAD_SMART_INFO_FAILURE } from './constants';

export const initialState = {
  container: 'App',
};

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_SMART_INFO_SUCCESS:
        draft.smart = _.get(action.payload, 'state.tokenResponse');
        break;
      case LOAD_SMART_INFO_FAILURE:
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });

export default appReducer;
