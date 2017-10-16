import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import Responsive from 'react-responsive'
import _ from 'lodash'
import {Button, Row, Col, Card, Table, Steps, Icon, notification, Input, Radio, InputNumber} from 'antd'


const Background = "../../static/img/cover.jpg"
const innerHeight = window.innerHeight

const coverStyle = {
  width: "100%",
  height: innerHeight/4 + 'px',
  opacity: 0.9,
  backgroundColor: '#000000',
  // backgroundImage: "url(" + Background + ")",
  display: "table",
  position: "relative",
  WebkitBackgroundSize: "cover",
  MozBackgroundSize: "cover",
  backgroundSize: "100% 100%",
  OBackgroundSize: "cover",
};

const textStyle = {
  color: "white",
  fontSize: "40px",
  textAlign: "center",
  paddingTop: (innerHeight / 8),
  paddingBottom: (innerHeight / 8)
}

const fontStyle1 = {
  color: "white",
  fontSize: "40px",
  textAlign: "center",
}

const fontStyle2 = {
  color: "white",
  fontSize: "30px",
  textAlign: "center",
}

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
    this.state = {
      value: 'male'
    }
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton() {
    
  }

  handleSelectGender(e) {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  handleChangeAge(e) {
    console.log('changed', e)
  }

  render() {
    const Step = Steps.Step
    return (
      <div className="ant-layout-content">
        <section style={coverStyle}>
          <div style={textStyle}>
            <Row type="flex" justify="center">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <h1 style={fontStyle1}>FASHION WORLDMAP</h1>
                <h4 style={fontStyle2}>See your outfit blends by cities</h4>
              </Col>
            </Row>      
          </div>         
        </section>

        <section style={sectionStyle1}>
          <Row type="flex">
             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={sectionTextStyle}>
                <h1>填入基本資料</h1>
                <h3>123</h3>
                <div className="addthis_inline_share_toolbox"></div>
                <RadioGroup onChange={(e) => this.handleSelectGender(e)} value={this.state.value}>
                  <Radio value={"male"}>Male</Radio>
                  <Radio value={"female"}>Femail</Radio>
                </RadioGroup>
                <div>
                  <InputNumber min={1} max={10} defaultValue={3} onChange={(e) => this.handleChangeAge(e)} />
                </div>
                
                <Input placeholder="Please enter your country" />
                <Input placeholder="Please enter your city" />
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
    testReducer: store.testReducer,
    // value: "male"
  }
);

export default connect(mapStateToProps, actionCreators)(IndexMain)
