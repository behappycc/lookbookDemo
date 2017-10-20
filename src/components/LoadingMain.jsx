import React from 'react';
import { Spin } from 'antd';

class LoadingMain extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="ant-layout-content">
        <div style={{textAlign: 'center', marginTop: (window.innerHeight-125)/2, marginBottom: (window.innerHeight-125)/2}}>
          <Spin tip={`Processing...`}/>
        </div>
      </div>
    )
  }
}

export default LoadingMain
