import { all } from 'redux-saga/effects';

import appSaga from '../containers/App/sagas';
import homeSaga from '../containers/Home/sagas';

export default function* sagas() {
  yield all([appSaga(), homeSaga()]);
}
