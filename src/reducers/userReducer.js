import * as types from '../constants/actionTypes'

export default function userReducer(state={}, action){
  switch(action.type) {
    case types.GET_USER_DONE:
      console.log(action.payload)
      return action.payload

    default:
      return state
  }
}