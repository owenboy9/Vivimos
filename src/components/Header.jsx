import React from 'react'
import Login from './Login.jsx'
import Nav from './Nav.jsx'
import logo from '../assets/images/vivimoslogo.png'
import '../assets/styles/header.css'

function Header() {
  return(
    <div className='header-container'>
      <img className='logo' src={logo} />
      <Nav />
      <Login />
    </div>
  )
}

export default Header