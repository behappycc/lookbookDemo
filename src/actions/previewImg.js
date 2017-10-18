import * as types from '../constants/actionTypes'

export const getPreviewImg = (payload) => (
  {
    type: types.GET_PREVIEW_IMG,
    payload: payload
  }
)