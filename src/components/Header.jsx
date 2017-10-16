import React from 'react';
import {Row} from 'antd';
import Responsive from 'react-responsive';

import HeaderMenu from './header/HeaderMenu'
import HeaderPopover from './header/HeaderPopover'

class Header extends React.Component {
  constructor() {
    super();

  }

  render() {

    const headerStyle = {
      'marginBottom': '10px',
    };

    const Desktop = ({children}) => <Responsive minWidth={992} children={children}/>;
    const Tablet = ({children}) => <Responsive minWidth={768} maxWidth={992} children={children}/>;
    const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
    const Default = ({children}) => <Responsive minWidth={768} children={children}/>;

    return (
      <header className="ant-layout-header" style={headerStyle}>
        <Row>
          <Desktop><HeaderMenu/></Desktop>
          <Tablet><HeaderPopover/></Tablet>
          <Mobile><HeaderPopover/></Mobile>
          <Default></Default>
        </Row>

      </header>
    );
  }
}

export default Header