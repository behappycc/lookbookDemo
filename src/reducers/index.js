import { combineReducers } from 'redux'
import userReducer from './userReducer'
import uploadReducer from './uploadReducer'
import previewImgReducer from './previewImgReducer'

const rootReducer = combineReducers({
  uploadReducer: uploadReducer,
  userReducer: userReducer,
  previewImgReducer: previewImgReducer
})

export default rootReducer