import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from "../GlobalContext"
import { useParams } from 'react-router-dom'


function Userpage() {
  
  const { activeUser, setActiveUser } = useContext(GlobalContext)
  const { username } = useParams()

  useEffect(() => {
    async function load() {
        let data = await fetch("/api/users/" + username)
        if (data.ok) {
            data = await data.json()
            setActiveUser(data)
        } else {
            return
        }
    }
    if (username) {
        load()
    } else {
        return
    }
}, [username])


  return (
    <>
      <h2>{ username }</h2>
      <h1>{activeUser.email}</h1>
    
    </>
  )

}

export default Userpage