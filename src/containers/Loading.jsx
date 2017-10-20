import React from 'react';
import { connect } from 'react-redux';

import Footer from '../components/Footer'
import LoadingMain from '../components/LoadingMain'

import * as actionCreators from '../actions'

class Index extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="layout ant-layout">
        <LoadingMain/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = store => (
  {

  }
)

export default connect(mapStateToProps, actionCreators)(Index)
