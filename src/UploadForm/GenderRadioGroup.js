import React from 'react'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import './styles/GenderRadioGroup.css'

const GenderRadioGroup = ({
  gender,
  handleGenderChange,
}) => (
  <RadioButtonGroup 
    name="gender" 
    defaultSelected="male" 
    valueSelected={gender}
    onChange={handleGenderChange}
    className="radioButtonGroup"
    fullWidth
  >
    <RadioButton
      value="male"
      label="Male"
      iconStyle={{ left: 0, fill: 'black' }}
      style={{ width: '100px' }}
    />
    <RadioButton
      value="female"
      label="Female"
      iconStyle={{ left: 0, fill: 'black' }}
      style={{ width: '100px' }}
    />
  </RadioButtonGroup>
)

export default GenderRadioGroup