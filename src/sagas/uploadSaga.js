import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import { ApiUploadUser } from '../services/upload'
import { SERVERIP_FRONTEND } from '../constants/config'

export function* uploadUser(action) {
  const response = yield call(ApiUploadUser, action.payload);
  console.log('saga get response: ', response)
  console.log(`http://${SERVERIP_FRONTEND}/#/result/` + response['user'])
  window.location.href = `http://${SERVERIP_FRONTEND}/#/result/` + response['user']
  location.reload()
}

export function*  watchUploadUser() {
  yield takeLatest(types.UPLOAD_USER, uploadUser);
}