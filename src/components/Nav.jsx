import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import { Link } from "react-router-dom"
import '../assets/styles/nav.css'


function Nav() {

  const { activeUser, setActiveUser } = useContext(GlobalContext)

  return <nav>
    <Link to="/">Hem</Link> &nbsp;
    <Link to="/Test">Test</Link> &nbsp;
    { activeUser.loggedIn && (
      <Link to={`/user/${activeUser.username}`}>Min sida</Link>
    )}
  </nav>
}

export default Nav