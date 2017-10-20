import React from 'react';
import { Spin } from 'antd';

class LoadingMain extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="ant-layout-content">
        <div style={{textAlign: 'center', marginTop: '250px', marginBottom: '250px'}}>
          <Spin tip={`Processing...`}/>
        </div>
      </div>
    )
  }
}

export default LoadingMain
