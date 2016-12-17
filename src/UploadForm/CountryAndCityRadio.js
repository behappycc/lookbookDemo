import React from 'react'
import R from 'ramda'
import { mapProps, compose, withHandlers } from 'recompose'
import AutoComplete from 'material-ui/AutoComplete'
import countryAndCityMap from '../config/countryAndCityMap'

import './styles/CountryAndCityRadio.css'

const capitalizeFirstCharacter =  
  R.pipe(
    R.over(R.lensIndex(0), R.toUpper),
    R.join(''),
  )

const processDataSource =
  R.map(
    R.pipe(
      R.split(' '),
      R.map(capitalizeFirstCharacter),
      R.join(' '),
    )
  )

const countryNames = 
  processDataSource(R.keys(countryAndCityMap))

const defaultCityList = []
const getCityListByCountry = 
  R.ifElse(
    R.equals(''),
    R.always(defaultCityList),
    R.pipe(
      R.toLower,
      R.propOr(defaultCityList, R.__, countryAndCityMap),
    ),
  )

const autoCompleteFilter = (searchText, key) => 
  searchText !== ''
    && R.toLower(key).indexOf(R.toLower(searchText)) !== -1

const enhance = compose(
  withHandlers({
    handleCityInput: ({ updateCity }) => (city) => updateCity(city),
    handleCountryInput: ({ updateCountry }) => (country) => updateCountry(country),
  }),
  mapProps(({
    country,
    ...otherProps,
  }) => ({
    cityList: processDataSource(getCityListByCountry(country)),
    ...otherProps,
  })),
)

const CountryAndCityRadio = ({
  city,
  country,
  cityList,
  handleCityInput,
  handleCountryInput,
}) => (
  <div className="CountryAndCityWrap">
    <AutoComplete
      hintText="Country"
      floatingLabelText="Please enter your country"
      dataSource={countryNames}
      menuCloseDelay={100}
      onUpdateInput={handleCountryInput}
      filter={autoCompleteFilter}
      fullWidth
    />
    <AutoComplete
      hintText="City"
      floatingLabelText="Please enter your city"
      dataSource={cityList}
      menuCloseDelay={100}
      onUpdateInput={handleCityInput}
      filter={autoCompleteFilter}
      fullWidth
    />
  </div>
)

export default enhance(CountryAndCityRadio)