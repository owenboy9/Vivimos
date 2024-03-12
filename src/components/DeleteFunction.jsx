import React, { useState } from 'react';



function deleteAd({ listingId, onClick }) {
  const [remove, setRemove] = useState('')
  
  async function removeAd() {
    const response = await fetch(`http://localhost:3001/listings/${listingId}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      setRemove("Auktion borttagen ")
      onClick(listingId)
    } else {
      const data = await response.json()
      setRemove(`'${data.remove}`)
    }
  }

  return (
    <div>
      <button onClick={removeAd}>Ta bort</button>
      {remove && <p>{remove}</p>}
    </div >
  )
}





function deleteUser({ userId, onClick }) {
  const [remove, setRemove] = useState('')

  async function removeUser() {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      setRemove("Användare borttagen ")
      onClick(userId)
    } else {
      const data = await response.json()
      setRemove(`'${data.remove}`)
    }
  }

  return (
    <div>
      <button onClick={removeUser}>Ta bort</button>
      {remove && <p>{remove}</p>}
    </div >
  )
}

export {deleteAd, deleteUser }


