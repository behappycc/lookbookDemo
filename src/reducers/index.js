import { combineReducers } from 'redux'
import userReducer from './userReducer'
import uploadReducer from './uploadReducer'

const rootReducer = combineReducers({
  uploadReducer: uploadReducer,
  userReducer: userReducer
})

export default rootReducer