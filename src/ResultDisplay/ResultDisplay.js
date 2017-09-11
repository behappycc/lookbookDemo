import React from 'react'
import { VictoryPie, VictoryTheme, VictoryLabel } from 'victory'
import { withHandlers } from 'recompose'
import RaisedButton from 'material-ui/RaisedButton'

import ShareIconGroup from './ShareIconGroup'

import './styles/ResultDisplay.css'

const enhance = withHandlers({
  handleTryAgainClick:
    () => () => {
      window.location.replace('/')
    },
})

const ResultDisplay = ({
  handleTryAgainClick,
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
          style={{ parent: { overflow: "visible" } }}
          padding={60}
          labelComponent={<VictoryLabel dx={10} />}
          animate={{
            duration: 2000, 
            onLoad: {duration: 1000}, 
          }}
        />
        <ShareIconGroup 
          imgUrl={imgUrl}
          rank={rank}
        />
      </div>
    </div>
    <div className="resultDisplayLowerWrap">
      <RaisedButton
        onClick={handleTryAgainClick}
      >
        Try again
      </RaisedButton>
    </div>
  </div>
)

export default enhance(ResultDisplay)