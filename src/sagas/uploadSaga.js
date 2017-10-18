import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import { ApiUploadUser } from '../services/upload'

export function* uploadUser(action) {
  const response = yield call(ApiUploadUser, action.payload);

  window.location.href = "http://localhost:8888/#/result/" + response['user'];
}

export function*  watchUploadUser() {
  yield takeLatest(types.UPLOAD_USER, uploadUser);
}