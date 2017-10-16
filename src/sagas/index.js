import { fork, all } from 'redux-saga/effects'

import { watchGetPic } from './productSaga'

export default function* rootSaga() {
  yield all([
    fork( watchGetPic),
  ])
}