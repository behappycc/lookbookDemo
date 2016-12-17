import React from 'react'
import { compose, withHandlers, withState, mapProps } from 'recompose'
import R from 'ramda'
import Dropzone from 'react-dropzone'
import { createFetch, base, method, body, parse } from 'http-client'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

import GenderRadioGroup from './GenderRadioGroup'
import CountryAndCityRadio from './CountryAndCityRadio'

import { API_URL } from '../config/apiEndPoints'
import { UPLOAD } from '../constants/formUploadConstants'

import './styles/UploadForm.css'

const uploadFormData = (form) => createFetch(
  base(API_URL),
  method('POST'),
  body(form),
  parse('json', 'jsonData'),
)

const enhance = compose(
  withState('gender', 'updateGender', 'male'),
  withState('age', 'updateAge', null),
  withState('city', 'updateCity', ''),
  withState('country', 'updateCountry', ''),
  withState('photo', 'updatePhoto', ''),
  mapProps(({
    photo,
    ...otherProps,
  }) => ({
    photo,
    photoUrl: R.propOr('', 'preview', photo),
    photoHeight: R.propOr(100, 'height', photo),
    ...otherProps,
  })),
  withHandlers({
    handleGenderChange: 
      ({ updateGender }) => (e, value) => updateGender(value),
    handleAgeChange:
      ({ updateAge }) => (e, value) => updateAge(value),
    handleDrop:
      ({ updatePhoto }) => (files) => {
        console.log(files[0])
        updatePhoto(files[0])
      },
    handleSubmit:
      ({ 
        updateFormState,
        city, gender, age, country, photo, photoUrl, 
      }) => () => {
        const { name } = photo

        const form = new FormData()
        form.append('age', age)
        form.append('gender', gender)
        form.append('country', country)
        form.append('city', city)
        form.append('image', photo)

        console.log(city, gender, age, country, photo, photoUrl)
        updateFormState({ type: UPLOAD })
        uploadFormData(form)(name)
        .then(({ jsonData }) => {
          console.log(jsonData)
          updateFormState({ type: UPLOAD, payload: jsonData })
        })
        .catch(err => {
          console.log(err)
          updateFormState({ type: UPLOAD, error: err })
        })
      },
  }),
)

const UploadForm = ({
  gender,
  updateGender,
  handleGenderChange,

  city,
  updateCity,

  country,
  updateCountry,

  age,
  handleAgeChange,
  
  photo,
  photoUrl,
  photoHeight,

  handleDrop,
  handleSubmit,

  isLoading,
}) => (
  <div 
    className="formWrap" 
  >
    {
      isLoading &&
        <CircularProgress 
          style={{
            position: 'absolute',
            top: '45%',
            left: '45%',
            zIndex: 999,
          }} 
        />
    }

    <div 
      className="formInnerWrap"
      style={{ 
        filter: isLoading ? 'blur(5px) grayscale(70%)' : '' 
      }}
    >
      <GenderRadioGroup 
        gender={gender}
        handleGenderChange={handleGenderChange}
      />

      <TextField
        className="textField"
        hintText="Age"
        type="number"
        floatingLabelText="Please enter your age"
        errorText={(age < 0) ? 'Age cannot be negative' : ''}
        onChange={handleAgeChange}
        fullWidth
      />

      <CountryAndCityRadio 
        city={city}
        updateCity={updateCity}
        country={country}
        updateCountry={updateCountry}
      />

      <Dropzone 
        onDrop={handleDrop}
        className="dropzone"
      >
        {
          photoUrl === '' 
           ? 'Upload your photo here'
           : <img src={photoUrl} className="dropzoneImage" alt="uploaded" />
        }
      </Dropzone>

      <RaisedButton 
        label="Submit" 
        className="button" 
        onClick={handleSubmit}
      />
    </div>
  </div>
)

export default enhance(UploadForm)
