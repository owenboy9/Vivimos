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
        const foundAd = data.find(ad => ad.id === id);
        setAd(foundAd);
      });
  }, [id]);

  if (!ad) {
    return <div>Vänta medan annonsen laddas...</div>;
  }

  const handleOfferButton = () => {
    navigate(`/ad/${id}/bid`)
  }
  const pronomenLista = {
    man: "Han",
    kvinna: "Hon",
    annat: "Hen"
  };
  const pronomen = pronomenLista[ad.kön.toLowerCase()];

  const pets = ["Hund", "Katt", "Fågel", "Häst"];
  let petsList = [];

  for (let pet of pets) {
    if (ad[pet]) {
      petsList.push(pet.toLowerCase());
    }
  }

  let petsString = petsList.join(", ");

  let petsSentence = ad.husdjur === "" ? `${pronomen} har inga husdjur.` : `${pronomen} har ${petsString}.`;

  if (ad.Annat) {
    petsSentence += ` ${pronomen} har även ${ad.Annat.toLowerCase()}.`;
  }


  return (
    <div>
      <h1>{ad.rubrik}</h1>
      <p>{ad.presentation}</p>
      <p>Annonsören är en {ad.ålder} år gammal {ad.kön.toLowerCase()}, från {ad.län} län. <br/> {pronomen} är {ad.sysselsättning.toLowerCase()} och bor i {ad.stad.toLowerCase()}. </p>
      <p>{petsSentence}</p>

      <p>Denna annons är aktiv till och med {ad.enddate}.</p>
      {ad.bids ? (<p>Antal bud: {ad.bids.length}</p>) : null}
      <button onClick={handleOfferButton}>Lägg ett bud</button>
    </div>
  );
}

export default AdDetailed;