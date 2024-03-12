
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import logo from '../assets/images/vivimoslogo.png'
import deleteAd from "../components/DeleteAd";

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
      <h1>Hej detta är annons-sidan</h1>
      <ul>
      {listings.map(listing => (
        <AdsCard key={listing.id} adInfo={listing} />
      ))}
      </ul>
    </section>
  )

}
function AdsCard({ adInfo }) {
  const { id, username,location, title, description, startDate, endDate } = adInfo
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



