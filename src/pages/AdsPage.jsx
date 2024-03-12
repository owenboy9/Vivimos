
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import logo from '../assets/images/vivimoslogo.png'

function AdsPage() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    async function load() {
      const response = await fetch("/db.json")
      const data = await response.json()
      setListings(data.listings)
    }
    load()
  }, [])

  const deleteAd = async (listingId) => {
    const response = await fetch(`http://localhost:3001/listings/${listingId}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      setListings(listings.filter(ad = ad.id !== listingId))
      onClick(listingId)
    } else {
      console.error('Fel vid borttagning av annonsen.')
    }
  }

  return (
    <section>
      <h1>Hej detta är annons-sidan</h1>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            <div>
              <img className='logo' src={logo} alt="logo" />
              <h2>Namn: {listing.username}</h2>
              <p>Rubrik: {listing.title}</p>
              <p>Plats: {listing.location}</p>
              <p>Om mig: {listing.description}</p>
              <p>Auktion publicerad: {listing.startDate}</p>
              <p>Auktion avslutas: {listing.endDate}</p>
              <button onClick={() => deleteAd(listingId)}>Ta bort</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
  function AdsCard({ adInfo }) {
    const { id, username, location, title, description, startDate, endDate } = adInfo
    return (
      <li key={id}>
        <div>
          <img className='logo' src={logo} />
          <h2>Namn: {username}</h2>
          <p>Rubrik: {title}</p>
          <p>Plats: {location}</p>
          <p>Om mig: {description}</p>
          <p>Auktion publicerad: {startDate}</p>
          <p>Auktion avslutas: {endDate}</p>
        </div>
      </li>
    )
  }

export default AdsPage