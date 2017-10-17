import * as types from '../constants/actionTypes'

export default function userReducer(state={}, action){
  switch(action.type) {
    case types.GET_USER:
      console.log(action.payload)
      return action.payload

    default:
      return state
  }
}