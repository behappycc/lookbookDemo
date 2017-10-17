import * as types from '../constants/actionTypes'

export const getUser = (payload) => (
  {
    type: types.GET_USER,
    payload: payload
  }
)