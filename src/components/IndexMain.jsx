import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Row, Col } from 'antd'

import WrappedUploadForm from './UploadForm'
import Cover from './Cover'

const sectionStyle1 = {
  margin: "30px",
  padding: "30px",
}

const sectionTextStyle = {
  textAlign: "center",
  margin: "30px"
}

class IndexMain extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="ant-layout-content">
        <Cover />

        <section style={sectionStyle1}>
          <Row type="flex">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={sectionTextStyle}>
                <WrappedUploadForm />
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
  }
)

export default connect(mapStateToProps, actionCreators)(IndexMain)
