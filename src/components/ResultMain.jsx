import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import Responsive from 'react-responsive'
import _ from 'lodash'
import {Button, Row, Col, Card, Table, Steps, Icon, notification, Input, Radio, InputNumber} from 'antd'

import WrappedUploadForm from './UploadForm'
import Cover from './Cover'

const Background = "../../static/img/cover.jpg"
const innerHeight = window.innerHeight

const fontStyle3 = {
  color: "black",
  fontSize: "30px",
  margin: "10px",
  textAlign: "center",
}

const fontStyle4 = {
  color: "black",
  fontSize: "20px",
  margin: "10px",
  textAlign: "center",
}

const sectionStyle1 = {
  margin: "30px",
  padding: "30px",
}

const sectionTextStyle = {
  textAlign: "center",
  margin: "30px"
}

const cardStyle = { 
  width: "240px",
  margin: "10px"
}

const customImageStyle = {
  display: "block",
  width: "100%",
  height: "auto"
}
const customCardStyle = {
  padding: '10px 16px'
}
const customCardPStyle = {
  color: '#999'
}

const RadioGroup = Radio.Group

const openNotification = () => {
  notification.open({
    message: '',
    description: '',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  })
}

const Desktop = ({children}) => <Responsive minWidth={992} children={children}/>;
const Tablet = ({children}) => <Responsive minWidth={768} maxWidth={992} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
const Default = ({children}) => <Responsive minWidth={768} children={children}/>;

class IndexMain extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log('yy')
    console.log(this.props.userReducer)
    return (
      <div className="ant-layout-content">
        <Cover />

        <section style={sectionStyle1}>
          <Row type="flex">
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div style={sectionTextStyle}>
                <img src={this.props.userReducer.imgUrl} alt="" />
              </div>
            </Col>
             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={sectionTextStyle}>
                <div className="addthis_inline_share_toolbox"></div>
              </div>
            </Col>
          </Row>
        </section>
      </div>


    )
  }
}

const mapStateToProps = store => (
  {
    userReducer: store.userReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(IndexMain)
