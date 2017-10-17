import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import Responsive from 'react-responsive'
import _ from 'lodash'
import {Button, Row, Col, Card, Table, Steps, Icon, notification, Input, Radio, InputNumber} from 'antd'
import { VictoryBar, VictoryPie, VictoryTheme, VictoryLabel } from 'victory'

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

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

class IndexMain extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log('yy')
    console.log(this.props.userReducer)
    console.log(this.props.userReducer.rank)
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

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div style={sectionTextStyle}>

                <VictoryPie 
                  data={this.props.userReducer.rank}
                  x="name"
                  y="prob"
                  theme={VictoryTheme.material}
                  style={{ parent: { overflow: "visible" } }}
                  padding={60}
                  labelComponent={<VictoryLabel dx={10} />}
                />

                {/* <VictoryPie 
                  data={this.props.userReducer.rank}
                  x="name"
                  y="prob"
                  theme={VictoryTheme.material}
                  style={{ parent: { overflow: "visible" } }}
                  padding={60}
                  labelComponent={<VictoryLabel dx={10} />}
                  animate={{
                    duration: 2000, 
                    onLoad: {duration: 1000}, 
                  }}
                /> */}
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
