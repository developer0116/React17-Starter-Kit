import { loginApi } from 'apis/auth-api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN, AUTH_SUCCESS, AUTH_FAILED, VERIFY_TOKEN } from 'store/action-types/auth';

function* loginFlow(action: ActionRedux) {
  try {
    const { token, user } = yield call(loginApi, action.payload);
    put({
      type: AUTH_SUCCESS,
      payload: { token, user },
    });
  } catch (error) {
    put({
      type: AUTH_FAILED,
      payload: error,
    });
  }
}

function* verifyToken(action: ActionRedux) {
  try {
    const { token, user } = yield call(loginApi, action.payload);
    put({
      type: AUTH_SUCCESS,
      payload: { token, user },
    });
  } catch (error) {
    put({
      type: AUTH_FAILED,
      payload: error,
    });
  }
}

export function* authWatcher() {
  yield takeLatest(LOGIN, loginFlow);
  yield takeLatest(VERIFY_TOKEN, verifyToken);
}
