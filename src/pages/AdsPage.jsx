import { useState, useEffect } from "react";
import logo from '../assets/images/vivimoslogo.png'
import '../assets/styles/adsPage.css'

function AdsPage() {
  const [ads, setAds] = useState([])

  useEffect(() => {
    async function fetchAds() {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setAds(data.ads);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    }
    fetchAds();
  }, []);

  const deleteAd = async (adId) => {
    try {
      const response = await fetch(`http://localhost:3001/ads/${adId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setAds(ads.filter(ad => ad.id !== adId));
        console.log(`Ad with ID ${adId} deleted successfully.`);
      } else {
        console.error('Error deleting ad.');
      }
    } catch (error) {
      console.error('Error deleting ad:', error);
    }
  }

  return (
    <section className="ads-container">
      <h1>Annonslista</h1>
      <ul className="ads-list">
        {ads.map(ad => (
          <li key={ad.id} className="ad-wrapper">
            <div className="ad-content">
              <img className='logo' src={logo} alt="logo" />
              <div>
                <p>Rubrik: {ad.rubrik}</p>
                <p>Län: {ad.län}</p>
                <p>Boende: {ad.boende}</p>
                <p>Sysselsättning: {ad.sysselsättning}</p>
                <p>Relatiionsstatus: {ad.relstatus}</p>
                <p>Husdjur: {ad.husdjurHar ? 'Ja' : 'Nej'}</p>
                <p>Stad: {ad.stad}</p>
                <p>Ålder: {ad.ålder}</p>
                <p>Kön: {ad.kön}</p>
                <p>Presentation: {ad.presentation}</p>
                <button onClick={() => deleteAd(ad.id)}>Ta bort</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AdsPage;