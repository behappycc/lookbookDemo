import * as types from '../constants/actionTypes'

export const uploadUser = (payload) => (
  {
    type: types.UPLOAD_USER,
    payload:payload
  }
)