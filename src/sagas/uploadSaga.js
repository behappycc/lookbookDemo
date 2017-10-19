import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import { ApiUploadUser } from '../services/upload'
import { SERVERIP } from '../constants/config'

export function* uploadUser(action) {
  const response = yield call(ApiUploadUser, action.payload);
  console.log(`http://${SERVERIP}/#/result/` + response['user'])
  window.location.href = `http://${SERVERIP}/#/result/` + response['user']
  location.reload()
}

export function*  watchUploadUser() {
  yield takeLatest(types.UPLOAD_USER, uploadUser);
}