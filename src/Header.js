import React from 'react'
import './styles/Header.css'

const Hr = ({ children }) => (
  <div className="HrWrap">
    <div className="HrLine"/>
    <div className="HrChildren">{children}</div>
    <div className="HrLine"/>
  </div>
)

const Header = () => (
  <div className="App-header">
    <a href="/" className="App-h2-wrap">
    	<h2 className="App-h2">FASHION  WORLDMAP</h2>
    </a>
    <Hr>See your outfit blends by cities</Hr>
  </div>
)

export default Header
