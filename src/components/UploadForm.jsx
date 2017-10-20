import React from 'react'
import {connect} from 'react-redux'
import { SERVERIP_FRONTEND } from '../constants/config'
import { Form, Icon, Input, Button, Radio } from 'antd'
import Dropzone from 'react-dropzone'
import * as actionCreators from '../actions'

const FormItem = Form.Item
const RadioGroup = Radio.Group

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
      upload_img: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const form = new FormData()
        form.append('age', values['age'])
        form.append('gender', values['gender'])
        form.append('country', values['country'])
        form.append('city', values['city'])
        form.append('image', this.state.upload_img)

        this.props.uploadUser({'form': form, 'name': this.state.upload_img['name']})
        window.location.href = `http://${SERVERIP_FRONTEND}/#/loading`
      }
    })
  }

  normFile(e) {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList
  }

  handleDrop (e) {
    this.setState({
      upload_img: e[0]
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

