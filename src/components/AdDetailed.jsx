import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function AdDetailed() {
  const {id} = useParams()
  const [ad, setAd] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    fetch('/api/ads')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        console.log('ID from params:', id); // Log the ID from params
        const foundAd = data.find(ad => ad.id === id);
        console.log('Found ad:', foundAd); // Log the found ad
        setAd(foundAd);
      });
  }, [id]);

  if (!ad) {
    return <div>Vänta medan annonsen laddas...</div>;
  }

  const handleOfferButton = () => {
    navigate(`/ad/${id}/bid`)
  }

  return (
    <div>
      <h1>{ad.rubrik}</h1>
      <p>{ad.presentation}</p>
      <p>En {ad.ålder} år gammal {ad.kön.toLowerCase()}, från {ad.län} <br/> som
        är {ad.sysselsättning.toLowerCase()} och bor i {ad.stad.toLowerCase()}.</p>
        {ad.bids ? (<p>Antal bud: {ad.bids.length}</p>) : null }
        <button onClick={handleOfferButton}>Lägg ett bud</button>
    </div>
  );
}
export default AdDetailed;