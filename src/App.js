import React from 'react'
import R from 'ramda'
import { pure, compose, withReducer } from 'recompose'
import UploadForm from './UploadForm/UploadForm'
import Header from './Header'
import ResultDisplay from './ResultDisplay/ResultDisplay'

import { UPLOAD } from './constants/formUploadConstants'
import './styles/App.css'

const defaultFormState = {
  isLoading: false,
  isUploaded: false,
  error: false,
}

const formReducer = (state = defaultFormState, { type, payload, error } = {}) => {
  switch (type) {
    case UPLOAD: {
      if (error) 
        return {
          ...state,
          isLoading: false,
          isUploaded: false,
          error: true,
        }
      if (!payload) 
        return {
          ...state,
          isLoading: true,
        }
      return {
        ...state,
        ...payload,
        isLoading: false,
        isUploaded: true,
      }
    }

    default:
      return defaultFormState
  }
}

const enhance = compose(
  withReducer(
    'formState', 
    'updateFormState', 
    formReducer,
    defaultFormState
  ),
	pure,
)

const App = ({
  formState: {
    isLoading,
    isUploaded,
    error,
    ...otherProps,
  },
  updateFormState,
  query,
}) => (
  <div className="App">
    <Header />
    {
      isUploaded || !R.isEmpty(query)
      ? <ResultDisplay 
          {...otherProps} 
          {...query}
        />
      : <UploadForm
          isLoading={isLoading}
          updateFormState={updateFormState} 
        />
    }
  </div>
)
export default enhance(App)
