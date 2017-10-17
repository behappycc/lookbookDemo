import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import { ApiUploadUser } from '../services/upload'

export function* uploadUser(action) {
  console.log(action)
  const response = yield call(ApiUploadUser);

}

export function*  watchUploadUser() {
  yield takeLatest(types.UPLOAD_USER, uploadUser);
}