import { useState, useEffect } from "react"
import { useContext } from "react"
import { GlobalContext } from "../GlobalContext"

function showUsers() {

  const { mockUsers, setMockUsers } = useContext(GlobalContext)

  console.log('show users')
  useEffect(() => {
    async function load() {
      const response = await fetch('api/users')
      const users = await response.json()
      console.log(users)
      setMockUsers(users)
    }
    load()
  },[])

  return (
    <section>
      <h3>Users</h3>
      <ul>
      {mockUsers.map( user => 
        
        <li>{user.username}</li>   
      )}
      </ul>
      
    </section>
  )

}

export default showUsers