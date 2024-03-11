
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function AdsPage() {
  const [ads, setAds] = useState([])

  useEffect(() => {
    async function load() {
      const response = await fetch("/db.json")
      const ads = await response.json()
      setAds(ads)
    }
    load()
  }, [])



  return (
    <section>
      <h1>Hej detta är annons-sidan</h1>
      <ul>
      {ads.map((ad)}
    </ul>
    </section>
  
}
function AdsCard(adInfo)
  const { id, username, email, password, role } = adInfo
  return (
    <li key={id}>
      
  </li>)
export default AdsPage



