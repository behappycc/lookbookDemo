import React from 'react';

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#404040',
  padding:'20px'
}

class Footer extends React.Component {
  render() {
    return (
      <div className="ant-layout-footer" style={footerStyle}>
        <div style={{color: "white"}}>© 2017 Fashion Worldmap </div>
      </div>
    )
  }
}

export default Footer