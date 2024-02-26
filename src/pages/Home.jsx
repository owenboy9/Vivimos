import { useContext } from "react"
import { GlobalContext } from "../GlobalContext"


function Home() {

  const { ads, setAds } = useContext(GlobalContext)
  console.log(ads)

  return (
    <>
    <h1>Hej detta är starten</h1>
    {ads.map(ad => <p>{ad}</p>)}
    </>
  );
}

export default Home