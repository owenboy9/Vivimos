
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import logo from '../assets/images/vivimoslogo.png'
import '../assets/styles/adsPage.css'

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
    <section className="ads-container">
      <h1>Hej detta är annons-sidan</h1>
      <ul className="ads-list">
        {listings.map(listing => (
          <li key={listing.id} className="ad-wrapper">
            <div className="ad-content">
              <img className='logo' src={logo} alt="logo" />
              <div>
                <h2>Namn: {listing.username}</h2>
                <p>Rubrik: {listing.title}</p>
                <p>Plats: {listing.location}</p>
                <p>Om mig: {listing.description}</p>
                <p>Auktion publicerad: {listing.startDate}</p>
                <p>Auktion avslutas: {listing.endDate}</p>
                <button onClick={() => deleteAd(listing.id)}>Ta bort</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}


export default AdsPage