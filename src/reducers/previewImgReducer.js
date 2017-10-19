import * as types from '../constants/actionTypes'

export default function previewImgReducer(state='', action){
  switch(action.type) {
    case types.GET_PREVIEW_IMG:
      return action.payload

    default:
      return state
  }
}