import React from 'react';
import {Link} from "react-router-dom"
import {Col, Popover, Button} from 'antd';

import HeaderMenuInline from './HeaderMenuInline'

const logoStyle = {
  'width': '120px',
  'height': '31px',
  'background': '#333',
  'border-radius': '6px',
  'margin': '16px 24px 16px 0',
  'float': 'left',
};

const textStyle = {
  'fontFamily': 'Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
  'textAlign': 'center',
  'fontSize': '12px',
  'color': 'rgba(255, 255, 255, 0.67)',
  'margin': '-16px',
};

const hamburgerMenuStyle = {
  'background': 'none',
  'border': 'none',
  'display': 'inline-block',
  'position': 'fixed',
  'right': '0px',
  'top': '18px',
  'zIndex': '1000',
};

const iconBarStyle = {
  'backgroundColor': '#616161',
  'display': 'block',
  'height': '4px',
  'margin': '0 auto 4px',
  'width': '30px',
};


class HeaderPopover extends React.Component {
  constructor() {
    super();

  }

  render() {
    const popover = [
      <Popover
        placement="bottomRight"
        content={<HeaderMenuInline/>}
        trigger="click"
      >
        <Button style={hamburgerMenuStyle}>
          <span style={iconBarStyle}></span>
          <span style={iconBarStyle}></span>
          <span style={iconBarStyle}></span>
        </Button>
      </Popover>
    ];

    return (
      <Col>
        <div className="logo" style={logoStyle}>
          <Link to='/'>
            <p style={textStyle}>
              
            </p>
          </Link>
        </div>
        {popover}
      </Col>
    );
  }
}

export default HeaderPopover