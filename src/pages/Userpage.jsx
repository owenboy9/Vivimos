import React, { useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import { useParams } from 'react-router-dom'


function Userpage() {
  
  const { activeUser, setActiveUser } = useContext(GlobalContext)
  const { username } = useParams()

  return (
    <>
      <h2>{ username }</h2>
    
    </>
  )

}

export default Userpage