import { fork, all } from 'redux-saga/effects'

import { watchUploadUser } from './uploadSaga'
import { watchGetUser } from './userSaga'

export default function* rootSaga() {
  yield all([
    fork(watchGetUser),
    fork(watchUploadUser)
  ])
}