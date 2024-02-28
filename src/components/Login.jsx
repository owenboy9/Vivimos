
import React, { useState, useEffect } from 'react'


function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('login.json')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error fetching mock data:', error)
      }
    }
    fetchData()
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login