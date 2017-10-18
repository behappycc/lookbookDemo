import React from 'react'
import {connect} from 'react-redux'
import { Form, Icon, Input, Button, Checkbox, Radio, Upload } from 'antd'
import Dropzone from 'react-dropzone'
const FormItem = Form.Item
const RadioGroup = Radio.Group

import * as actionCreators from '../actions'

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
    this.normFile = this.normFile.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of upload-form: ', values)
        this.props.uploadUser()
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


  render() {
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
            {getFieldDecorator('userAge', {
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
          {/*<FormItem>
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload your photo</p>
                </Upload.Dragger>
              )}
            </div>
          </FormItem>*/}
          <FormItem>
            {getFieldDecorator('img', {
              rules: [{ required: true, message: 'Please input images!' }],
            })(
              <Dropzone>
                
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
  }
)

export default connect(mapStateToProps, actionCreators)(WrappedUploadForm)

