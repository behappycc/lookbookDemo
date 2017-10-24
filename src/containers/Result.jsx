import React from 'react';
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"

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
    console.log("url" + this.props.urlReducer)
  }

  render() {
    
    console.log(this.props.userReducer.imgUrl)
    // console.log(this.props.match.params.user)
    
    return (
      <div className="layout ant-layout">
        <Helmet>
          <meta property="og:url" content="http://35.192.228.224/#/result/32" />
          <meta property="og:type" content="article" />
          <meta property="og:title"  content="FFASHION WORLD MAP" />
          <meta property="og:description" content="FASHION WORLD MAP" />
          <meta property="og:image" content={this.props.userReducer.imgUrl} />
        </Helmet>   
        <ResultMain/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = store => (
  {
    userReducer: store.userReducer,
    urlReducer: store.urlReducer
  }
)

export default connect(mapStateToProps, actionCreators)(Result)
