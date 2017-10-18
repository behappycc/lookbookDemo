import { fork, all } from 'redux-saga/effects'

import { watchUploadUser } from './uploadSaga'
import { watchGetUser } from './userSaga'
import { watchGetPreviewImg } from './previewImgSaga'

export default function* rootSaga() {
  yield all([
    fork(watchGetUser),
    fork(watchUploadUser),
    fork(watchGetPreviewImg)
  ])
}