import React from 'react'
import {connect} from 'react-redux'
import { Form, Icon, Input, Button, Checkbox, Radio, Upload } from 'antd'
import Dropzone from 'react-dropzone'
const FormItem = Form.Item
const RadioGroup = Radio.Group

import * as actionCreators from '../actions'

const dropzoneStyle = {
  width  : "100%",
  height : "100%",
  border : "1px solid #d9d9d9",
  borderRadius: "4px",
  padding: "50px"

}

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
    this.normFile = this.normFile.bind(this)

    this.state = {
      upload_img: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of upload-form: ', values)
        values['imgUrl'] = this.state.upload_img
        console.log('ready to upload: ', values)
        this.props.uploadUser(values)
      }
    })
  }

  normFile(e) {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList
  }

  handleDrop (e) {
    console.log('handle drop', e[0]['preview'])
    this.setState({
      upload_img: e[0]['name']
    })
    this.props.getPreviewImg(e[0]['preview'])
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }


  render() {
    console.log(this.props.previewImgReducer)
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="upload-form">
          <FormItem>
            {getFieldDecorator('gender' , {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <RadioGroup>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('age', {
              rules: [{ required: true, message: 'Please input your age!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Age" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('country', {
              rules: [{ required: true, message: 'Please input country!' }],
            })(
              <Input prefix={<Icon type="global" style={{ fontSize: 13 }} />} placeholder="Country" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('city', {
              rules: [{ required: true, message: 'Please input city!' }],
            })(
              <Input prefix={<Icon type="environment-o" style={{ fontSize: 13 }} />} placeholder="City" />
            )}
          </FormItem>
          
          <FormItem>
            {getFieldDecorator('imgUrl', {
              rules: [{ required: true, message: 'Please input images!' }],
            })(
              <Dropzone
                onDrop={(e) => this.handleDrop(e)}
                style={dropzoneStyle}
              >
                {this.props.previewImgReducer === '' ? <p style={{color: "#d9d9d9"}}>Upload your photo here</p> : 
                <img style={{width: "100%"}} src={this.props.previewImgReducer} alt="Uploaded"/>}               
              </Dropzone>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              SUBMIT
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedUploadForm = Form.create()(UploadForm);

const mapStateToProps = store => (
  {
    uploadReducer: store.uploadReducer,
    previewImgReducer: store.previewImgReducer
  }
)

export default connect(mapStateToProps, actionCreators)(WrappedUploadForm)

