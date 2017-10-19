import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import { ApiGetUser } from '../services/user'

export function* getPreviewImg(action) {
  yield put({
    type: types.GET_PREVIEW_IMG,
    payload: action
  })
}

export function*  watchGetPreviewImg() {
  yield takeLatest(types.GET_USER, getPreviewImg);
}