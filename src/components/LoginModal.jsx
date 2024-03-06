import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from "../GlobalContext"
import '../assets/styles/loginModal.css'


function LoginModal() {

  const { activeUser, setActiveUser } = useContext(GlobalContext)

  return (
    <div className='login-container'>
      {activeUser.loggedIn ? (
        <div>
         <p>Logged in as user: {activeUser.username}</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      
    ) : (
      <div className='login-form'>
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

        {!showReg && !activeUser.loggedIn ? (
          <button onClick={handleReg}>Register new user</button>
        ) : (
          <div>
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
    </div>

        )} 
        
        </div>
    )}
  </div>
)

}


export default LoginModal