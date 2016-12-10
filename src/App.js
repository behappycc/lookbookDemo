import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Button, Checkbox, Col, Row, Form, FormGroup, HelpBlock, Radio, ControlLabel, FormControl } from 'react-bootstrap'
import { compose, withHandlers } from 'recompose'
import logo from './logo.svg'
import './App.css'

const FieldGroup = ({
  id,
  label,
  help,
  ...otherProps,
}) => (
  <FormGroup controlId={id} className="FormGroupWrap">
    <Col sm={2} className="FormGroupLabel">{label}</Col>
    <Col sm={10} className="FormGroupInput">
      <FormControl {...otherProps} />
    </Col>
  </FormGroup>
)

const stringifyAndLog = compose(JSON.stringify, console.log)

const enhance = compose(
  withHandlers({
    onDrop: () => (file) => {
      console.log('Receive file: ' + stringifyAndLog(file))
    },
  })
)

const UploadForm = enhance(({
  onDrop,
}) => (
  <Form className="FormWrap" horizontal>
    <FieldGroup
      id="formControlsEmail"
      type="text"
      label="age"
      placeholder="Your age"
    />

    <FieldGroup
      id="formControlsPassword"
      label="city"
      type="text"
    />

    <FormGroup>
      <Radio inline>
        Male
      </Radio>
      {' '}
      <Radio inline>
        Female
      </Radio>
    </FormGroup>

    <Dropzone className="DropzoneWrap" onDrop={onDrop}>
      <div className="DropzoneBox">Drop stuff here</div>
    </Dropzone>

    <Button type="submit" className="SubmitButton">
      Submit
    </Button>
  </Form>
))

const Hr = ({ children }) => (
  <div className="HrWrap">
    <div className="HrLine"/>
    <div className="HrChildren">{children}</div>
    <div className="HrLine"/>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Your City Outfit Blend</h2>
          <Hr>See your outfit blends by cities</Hr>
        </div>
        <UploadForm />
      </div>
    )
  }
}

export default App
