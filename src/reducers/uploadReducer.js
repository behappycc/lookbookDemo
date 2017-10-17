import * as types from '../constants/actionTypes'

export default function uploadReducer(state={}, action){
  switch(action.type) {
    case types.UPLOAD_USER:
      return state

    default:
      return state
  }
}