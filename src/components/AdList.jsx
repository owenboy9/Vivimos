import { useState, useEffect } from "react";

function AdList() {
  const [items, setItems] = useState([])
  useEffect(() => {
    async function load() {
      const response = await fetch('/api/ads')
      const items = await response.json()
      console.log(response)
      setItems(items)
    }
    load()
  }, [])

  return <section>
    <h2>Aktuella annonser:</h2>
    <ul>
      {items.map(ItemCard)}
    </ul>
  </section>
}

function ItemCard(ad) {
  const { rubrik, kön, ålder, stad, län, sysselsättning } = ad;
  return (
    <li key={rubrik}>
      <h3>{rubrik}</h3>
      <p>En {ålder} år gammal {kön.toLowerCase()}, från {län} <br/> som är {sysselsättning.toLowerCase()} och bor i {stad.toLowerCase()}</p>

    </li>
  );
}




export default AdList