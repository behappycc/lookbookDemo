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
        <a href="http://mclab.citi.sinica.edu.tw">
          <div style={{color: "white"}}>
            <p>Directed by Multimedia Computing Lab, CITI, Academia Sinica</p>
            <p>http://mclab.citi.sinica.edu.tw</p>
            <p>© Copyright Multimedia Computing Lab, CITI, Academia Sinica, 2017. All rights reserved.</p>
          </div>
        </a>
        
      </div>
    )
  }
}

export default Footer