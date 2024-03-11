import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import { Link } from "react-router-dom"
import '../assets/styles/nav.css'


function Nav() {

  const { activeUser, setActiveUser } = useContext(GlobalContext)

  return <nav>
    

    <Link to="/">Hem</Link> &nbsp;
    <Link to="/Test">Test</Link> &nbsp;
    <Link to="/AdsPage">Annonser</Link> &nbsp;

    { activeUser.loggedIn && (
      <>
      <Link to='/UserPage'>Min sida</Link> &nbsp;
      <Link to="/createOffer">Skapa annons</Link>
      </>
    )}
  </nav>
}

export default Nav