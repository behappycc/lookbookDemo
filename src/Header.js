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
    <h2 className="App-h2">FASHION  WORLDMAP</h2>
    <Hr>See your outfit blends by cities</Hr>
  </div>
)

export default Header
