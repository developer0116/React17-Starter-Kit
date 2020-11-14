import { all } from 'redux-saga/effects';
import { authWatcher } from './auth.saga';

export function* rootSaga() {
  yield all([authWatcher()]);
}
