import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../GlobalContext"
import { Link, useNavigate } from "react-router-dom"
import bidpaddle from '../assets/images/bidpaddle.png'
import '../assets/styles/itemCard.css'

function AdList() {

  const { activeUser, setActiveUser } = useContext(GlobalContext)
  const { ads, setAds } = useContext(GlobalContext)
  const { filteredAds, setFilteredAds } = useContext(GlobalContext)
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  useEffect(() => {
    async function load() {
      const response = await fetch('/api/ads')
      let items = await response.json()
      items = items.filter(item => item.publicerad === true)
      console.log(response)
      setItems(items)
      setAds(items)
      setFilteredAds(items)
    }
    load()
  }, [])

  return <section>
    <h2>Aktuella auktioner:</h2>
    <ul>
      {filteredAds.map(ItemCard)}
    </ul>
  </section>

  function ItemCard(ad) {

    const { id, rubrik, kön, ålder, stad, län, sysselsättning, enddate, bids } = ad

    const handleOfferButton = () => {
      navigate(`/ad/${id}/bid`)
    }

    return (
      <div className='itemCard-container'>
        <div className='ad-info'>
          <li key={id}>
            <h3><Link to={`/ad/${id}`}>{rubrik}</Link></h3>
            <p>En {ålder} år gammal {kön.toLowerCase()}, från {län} <br /> som är {sysselsättning.toLowerCase()} och bor i {stad.toLowerCase()}.</p>&nbsp;
            <p>Denna annons är aktiv till och med {enddate}.</p>

          </li>
        </div>
        <div className='ad-right'>
          {bids && bids.includes(activeUser.id) ? (<img className='bidPaddle' src={bidpaddle}></img>) : null}
          {bids ? (<p className="antalBud">Antal bud: {bids.length}</p>) : null}
          <div class="button-container">
            <button onClick={handleOfferButton}>Lägg ett bud</button>
          </div>
        </div>
      </div>
    )
  }


}






export default AdList