import React from 'react';
import { connect } from 'react-redux'
import DocumentMeta from 'react-document-meta'

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
  }

  render() {
    const meta = {
      chartset: 'UTF-8',
      title: 'FASHION WORLD MAP',
      description: 'FASHION WORLD MAP',
      meta: {
        name: {
          viewport: 'width=device-width, initial-scale=1.0',
        },
        'http-equiv': {
          'X-UA-Compatible': 'ie=edges'
        },
        property: {
          // 'og:url': 'http://fashionworldmap.citi.sinica.edu.tw/',
          'og:type': 'article',
          'og:title': 'FASHION WORLD MAP',
          'og:description': 'FASHION WORLD MAP',
          'og:image': this.props.userReducer.imgUrl
        }
      }
    }
    // console.log(meta)
    // console.log(this.props.match.params.user)
    return (
      <div className="layout ant-layout">
        <DocumentMeta {...meta} />    
        <ResultMain/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = store => (
  {
    userReducer: store.userReducer
  }
)

export default connect(mapStateToProps, actionCreators)(Result)
