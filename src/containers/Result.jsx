import React from 'react';
import { connect } from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ResultMain from '../components/ResultMain'

import * as actionCreators from '../actions'

class Result extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.getUser(
      {
        user: this.props.match.params.user
      }
    )
  }

  render() {
    console.log(this.props.match.params.user)
    return (
      <div className="layout ant-layout">         
        <ResultMain/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = store => (
  {

  }
)

export default connect(mapStateToProps, actionCreators)(Result)
