import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header'
import Footer from '../components/Footer'
import IndexMain from '../components/IndexMain'

import * as actionCreators from '../actions'

class Index extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="layout ant-layout">
        {/* <Header/> */}
        <IndexMain/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = store => (
  {

  }
);

export default connect(mapStateToProps, actionCreators)(Index)
