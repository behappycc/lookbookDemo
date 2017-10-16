import React from 'react';
import {connect} from 'react-redux';
import {Col, Menu, Icon} from 'antd'
import {Link} from "react-router-dom"

import * as actionCreators from '../../actions'

const {SubMenu} = Menu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderMenu extends React.Component {
  constructor() {
    super();

    this.handleTradingClick = this.handleTradingClick.bind(this);
  }

  handleTradingClick() {
    this.props.navigate_trading_page('buy-sell-strength');
  }

  render() {
    const logoStyle = {
      'width': '120px',
      'height': '31px',
      'background': '#333',
      'border-radius': '6px',
      'margin': '16px 24px 16px 0',
      'float': 'left',
    };

    const menuStyle = {
      'position': 'relative',
      'float': 'right',
      'lineHeight': '64px',
    };

    const textStyle = {
      'fontFamily': 'Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
      'textAlign': 'center',
      'fontSize': '12px',
      'color': 'rgba(255, 255, 255, 0.67)',
      'margin': '-16px',
    };

    const menu = 
      <Menu
        mode="horizontal"
        theme="dark"
        style={menuStyle}
      >
        <Menu.Item key="mail">
          <Link to='/layout'/>
          <Icon type="mail"/>
        </Menu.Item>
      </Menu>
    

    return (
      <Col>
        <div className="logo" style={logoStyle}>
          <Link to='/'>
            <p style={textStyle}>
              
            </p>
          </Link>
        </div>
        {menu}
      </Col>
    );
  }
}

const mapStateToProps = store => (
  {

  }
)

export default connect(mapStateToProps, actionCreators)(HeaderMenu)

