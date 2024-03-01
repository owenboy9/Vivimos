import React, { useState, useEffect } from 'react'


function Login() {

  const [formData, setFormData] = useState({
    username: '', 
    password: ''
})

    async function fetchUser(e, formData) {
      e.preventDefault()
      console.log(formData.username)
      try {
        const response = await fetch(`api/users/?username=${formData.username}&password=${formData.password}`)
        const data = await response.json()
        
        if(data[0]) {
          console.log(data, formData)
        }
      } catch (error) {
        console.error('Error fetching mock data:', error)
      }
    }
   
  function handleChange(e) {
    setFormData((prevFormData) => ({
      ...prevFormData, 
      [e.target.name] : e.target.value
    }))
  }


  return (
    <div>
      <form onSubmit={e => fetchUser(e, formData)}>
        <label>
          Username:
        </label>
        <input type="text" name="username" value={formData.username} onChange={e => handleChange(e)}></input>
        <br />
        <label>
          Password:
        </label>
        <input type="text" name="password" value={formData.password} onChange={e => handleChange(e)}></input>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login