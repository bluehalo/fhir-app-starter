/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

// import constants from './constants';

// The initial state of the App
export const initialState = {
  container: 'Home',
};

const homeReducer = (state = initialState /* action */) => produce(state, (/* draft */) => {});

export default homeReducer;
