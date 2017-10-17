import React from 'react';
import { connect } from 'react-redux';

import {Button, Row, Col, Card, Table, Steps, Icon, notification, Input, Radio, InputNumber} from 'antd'

import Header from '../components/Header'
import Footer from '../components/Footer'
import IndexMain from '../components/IndexMain'

import * as actionCreators from '../actions'

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

class Cover extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
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
    )
  }
}

const mapStateToProps = store => (
  {

  }
);

export default connect(mapStateToProps, actionCreators)(Cover)
