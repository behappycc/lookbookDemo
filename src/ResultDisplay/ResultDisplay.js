import React from 'react'
import { VictoryPie, VictoryTheme, VictoryLabel } from 'victory'
import RaisedButton from 'material-ui/RaisedButton'

import ShareIconGroup from './ShareIconGroup'
import { FRONTEND_URL } from '../config/apiEndPoints'

import './styles/ResultDisplay.css'

const ResultDisplay = ({
  imgUrl,
  rank,
}) => (
  <div className="resultDisplayWrap">
    <div className="resultDisplayUpperWrap">
      <div className="leftPanel">
        <img src={imgUrl} alt="uploaded" className="uploadPhoto"/>
      </div>
          
      <div className="rightPanel">
        <VictoryPie 
          data={rank}
          x="name"
          y="prob"
          theme={VictoryTheme.material}
          padding={60}
          labelComponent={<VictoryLabel dx={10}/>}
          
          animate={{
            duration: 2000, 
            onLoad: {duration: 1000}, 
          }}
        />
        <ShareIconGroup />
      </div>
    </div>
    <div className="resultDisplayLowerWrap">
      <RaisedButton
        href={FRONTEND_URL}
      >
        Try again
      </RaisedButton>
    </div>
  </div>
)

export default ResultDisplay