import { combineReducers } from 'redux'
import userReducer from './userReducer'
import uploadReducer from './uploadReducer'
import previewImgReducer from './previewImgReducer'
import urlReducer from './urlReducer'

const rootReducer = combineReducers({
  uploadReducer: uploadReducer,
  userReducer: userReducer,
  previewImgReducer: previewImgReducer,
  urlReducer: urlReducer
})

export default rootReducer