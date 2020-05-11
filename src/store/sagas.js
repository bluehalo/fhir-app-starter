import { all } from 'redux-saga/effects';

import appSaga from '../containers/App/sagas';

export default function* sagas() {
  yield all([appSaga()]);
}
