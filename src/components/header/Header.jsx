import React from 'react'
import './header.css'
import CTA from "./CTA"

const Header = () => {
  return (
    <Header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sean Wang</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA /> 
      </div>
    </Header>
  )
}

export default Header