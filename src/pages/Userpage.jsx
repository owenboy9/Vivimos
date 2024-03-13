import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from "../GlobalContext"
import { useParams } from 'react-router-dom'


function Userpage() {
  
  const { activeUser, setActiveUser } = useContext(GlobalContext)
  const { username } = useParams()
  const [ userData, setUserData] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users/${username}`)
        console.log(response)
        if (!response.ok) {
          console.error('Error fetching user data:', response.statusText)
          setUserData([])
          return
        }
        const data = await response.json()
        console.log(data)
        setUserData(data)
      } catch (error) {
        console.error('Error fetching user data:', error)
        setUserData([])
      }
    };

    fetchUserData()
  }, [username])

  if (!userData.length) {
    return <div>Laddar...</div>
  }






  return (
    <>
     { !activeUser.loggedIn ? (
      <div className='userInfo-notLoggedIn'>
        <p>Test</p>
        <h2>{activeUser.username}</h2>
      </div>
     ) : (
     
   
      <h2>Hej</h2>
    
    
  )}
  </>
  )

}


export default Userpage