import React from 'react';
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"

import Header from '../components/Header'
import Footer from '../components/Footer'
import ResultMain from '../components/ResultMain'

import * as actionCreators from '../actions'

{/* <meta property="og:url" content="http://fashionworldmap.citi.sinica.edu.tw/" />
  <meta property="og:type" content="article" />
  <meta property="og:title"  content="Fashion Worldmap" />
  <meta property="og:description" content="Fashion Worldmap" />
  <meta property="og:image" content="static/img/" /> */}

{/* <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> */}


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
        <div style={{display: "none"}}>
          <img src={this.props.userReducer.imgUrl} style={{width:"300px", height:"300px"}} alt="" />
        </div>
        <Helmet>
          <meta property="og:url" content="http://fashionworldmap.citi.sinica.edu.tw/" />
          <meta property="og:type" content="article" />
          <meta property="og:title"  content="Fashion Worldmap" />
          <meta property="og:description" content="Fashion Worldmap" />
          <meta property="og:image" content="{this.props.userReducer.imgUrl}" />
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
