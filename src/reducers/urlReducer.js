import * as types from '../constants/actionTypes'

export default function urlReducer(state='', action){
  switch(action.type) {
    case types.GET_USER_URL:
      return action.payload

    default:
      return state
  }
}