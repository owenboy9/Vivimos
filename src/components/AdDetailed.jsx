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
  let kidsSentence = ad.barnAntal === "" ? `${pronomen} har inga barn.` : `${pronomen} har ${ad.barnAntal} barn`;

  if (ad.barnBoende !== "") {
    if (ad.barnBoende.toLowerCase() === "ja") {
      kidsSentence += `, som ${pronomen.toLowerCase()} bor tillsammans med.`;
    } else if (ad.barnBoende.toLowerCase() === "delvis") {
      kidsSentence += `, som ${pronomen.toLowerCase()} delvis bor tillsammans med.`;
    } else if (ad.barnBoende.toLowerCase() === "nej") {
      kidsSentence += `, som ${pronomen.toLowerCase()} inte bor tillsammans med.`;
    }
  }
  const nearby = ["skog", "hav", "kultur", "shopping"].filter(attraction => ad[attraction]);
  let nearbySentence = "";

  if (nearby.length > 0) {
    nearbySentence = `${pronomen} bor i närheten av: ${nearby.join(", ")}.`;
  } else {
    nearbySentence = `${pronomen} har inte angivit vad som erbjuds i närområdet.`;
  }


  let petsString = petsList.join(", ");

  let petsSentence = ad.husdjur === "" ? `${pronomen} har inga husdjur.` : `${pronomen} har ${petsString}.`;

  if (ad.Annat) {
    petsSentence += ` ${pronomen} har även ${ad.Annat.toLowerCase()}.`;
  }
  let relStatusSentence = "";

  switch(ad.relstatus.toLowerCase()) {
    case "ensamvarg":
      relStatusSentence = `${pronomen} är en övertygad singel, en ensamvarg.`;
      break
    case "exklusiv särbo":
      relStatusSentence = `${pronomen} är i ett exklusivt särboförhållande.`;
      break;
    case "exklusiv sambo":
      relStatusSentence = `${pronomen} är i ett exklusivt samboförhållande.`;
      break;
    case "öppen särbo":
      relStatusSentence = `${pronomen} är i ett öppet särboförhållande.`;
      break;
    case "öppen sambo":
      relStatusSentence = `${pronomen} är sambo, i ett öppen relation.`;
      break;
    case "singel":
      relStatusSentence = `${pronomen} är singel, men öppen för nya relationer.`;
      break;
    default:
      relStatusSentence = `${pronomen} har inte angivit sin relationsstatus.`;
  }



  return (
    <div>
      <h1>{ad.rubrik}</h1>
      <p>{ad.presentation}</p>
      <p>Annonsören är en {ad.ålder} år gammal {ad.kön.toLowerCase()},
        från {ad.län} län. <br/> {pronomen} bor i {ad.boende.toLowerCase()} i {ad.stad.toLowerCase()}. </p>
      <p>{nearbySentence}</p>

      <p>{petsSentence}</p>
      <p>{relStatusSentence}</p>
      <p>{kidsSentence}</p>
      {ad.sysselsättning && ad.sysselsättning !== "" && (
        <p>{pronomen} är verksam som {ad.sysselsättning}</p>
      )}
      {ad.fritidsintressen && ad.fritidsintressen !== "" && (
        <p>{pronomen} har angivit följande fritidsintressen: {ad.fritidsintressen}</p>
      )}
      <p>Denna annons är aktiv till och med {ad.enddate}.</p>
      {ad.bids ? (<p>Antal bud: {ad.bids.length}</p>) : null}
      <button onClick={handleOfferButton}>Lägg ett bud</button>
    </div>
  );
}

export default AdDetailed;