import React from 'react'
import Login from './Login.jsx'
import Nav from './Nav.jsx'
import logo from '../assets/images/vivimoslogo.png'
import '../assets/styles/header.css'

function Header() {
  return (
    <div className='header-container'>
      <div classname='logo-container'>
        <img className='logo' src={logo} />
      </div>
      <Nav />
      <Login />
    </div>
  )
}

export default Header