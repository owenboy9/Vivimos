
import { useState, useEffect } from "react";
import logo from '../assets/images/vivimoslogo.png'
import { Link } from "react-router-dom"

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

  return (
    <section>
      <h2>Hej detta är annons-sidan</h2>
      <ul>
      {listings.map(listing => (
        <AdsCard key={listing.id} adInfo={listing} />
      ))}
      </ul>
    </section>
  )

}
function AdsCard({ adInfo }) {
  const { id, username,location, title, description, startDate, image} = adInfo
  return (
    <li key={id}>
      <div>
        <img className='logo' src={logo} />
        <h1>Namn: {username}</h1>
        <p>Rubrik: {title}</p>
        <p>Plats: {location}</p>
        <p>Om mig: {description}</p>
        <p>Annons publicerad: {startDate}</p>
      </div>
    </li>
  )
}

export default AdsPage



