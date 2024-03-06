import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import '../assets/styles/login.css'
import { createPortal } from "react-dom"
import Modal from './Modal.jsx'


function Login() {

  const { activeUser, setActiveUser } = useContext(GlobalContext)
  const { modalOpen, setModalOpen } = useContext(GlobalContext)
  const { loginOpen, setLoginOpen } = useContext(GlobalContext)
  const { regOpen, setRegOpen } = useContext(GlobalContext)


  const [formData, setFormData] = useState({
    username: '', 
    password: ''
})

function handleButtonClick(e) {
  console.log(e)
  setModalOpen(true)
  if (e.target.value === 'login') {
    setLoginOpen(true)
  }
  else if (e.target.value === 'register') {
    setRegOpen(true)
  }
  
}

return (
  <div className='login-container'>
    <button value='login' onClick={ handleButtonClick }> Logga in</button>
    <button value='register' onClick={ handleButtonClick }>Registera dig</button>
    
    { modalOpen && loginOpen && (
      createPortal(
      <Modal>
        <p>Logga in</p>
        <form onSubmit={e => fetchUser(e, formData)}>
        <label>
          Username:
        </label>
        <input type="text" name="username" value={formData.username} onChange={e => handleChange(e)}></input>
        <br />
        <label>
          Password:
        </label>
        <input type="password" name="password" value={formData.password} onChange={e => handleChange(e)}></input>
        <br />
        <button type="submit">Login</button>  
        </form>
      </Modal>, document.body
      )
    )}

    { modalOpen && regOpen && (
      <Modal>
        <p>Registrera</p>
        <form onSubmit={e => createUser(e)}>
        <label>
          Username:
        </label>
        <input type="text" name="username"></input>
        <br />
        <label>
          Email:
        </label>
        <input type="email" name="email"></input>
        <br />
        <label>
          Password:
        </label>
        <input type="password" name="password"></input>
        <br />
        <button onClick={handleReg}>Register new user</button>
      </form>
      </Modal>
    )}
  </div>
)
    

    

    useEffect(() => {
      console.log(activeUser)
    }, [activeUser])
   
  function handleChange(e) {
    setFormData((prevFormData) => ({
      ...prevFormData, 
      [e.target.name] : e.target.value
    }))
  }

  function handleLogout() {
    setActiveUser({})
    setShowReg(false)
    formData = []
  }

  function handleReg() {
    console.log('handle reg')
    setShowReg(true)
  }

  async function fetchUser(e, formData) {
    e.preventDefault()
    console.log(formData.username)
    try {
      const response = await fetch(`api/users/?username=${formData.username}&password=${formData.password}`)
      const data = await response.json()
      
      if(data[0]) {
        console.log(data, formData)
        setActiveUser({
          ...data[0],
          loggedIn: true
        })
      }
    } catch (error) {
      console.error('Error fetching mock data:', error)
    }
  }
  
  
  async function createUser(e) {
    e.preventDefault()
    const regData = new FormData(e.target)
    let regPost = Object.fromEntries(regData)
    regPost = {
      ...regPost,
      role: "user"
    }
    console.log(e.target, 'regData', regData, 'regPost', regPost)
    try {
      await fetch(`api/users/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(regPost),
      })
      .then((response) => response.json())
      .then((data) => console.log('New user added:', data))
      .catch((error) => console.error('Error adding new user:', error))
      
    } catch (error) {
      console.error('Error fetching mock data:', error)
    }
  
  }





}






export default Login