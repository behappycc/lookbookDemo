import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import { ApiGetUser } from '../services/user'

export function* getUser(action) {
  const response = yield call(ApiGetUser, action.payload);
  console.log(response)

  yield put({
    type: types.GET_USER_URL,
    payload: action.payload + '123321'
  })

  yield put({
    type: types.GET_USER_DONE,
    payload: response
  })
}

export function*  watchGetUser() {
  yield takeLatest(types.GET_USER, getUser);
}