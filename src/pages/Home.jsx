import { useContext } from "react"
import { GlobalContext } from "../GlobalContext"
import AdList from "../components/AdList"


function Home() {

  const { ads, setAds } = useContext(GlobalContext)
  console.log(ads)

  return (
    <>
    <h1>Hej detta är starten</h1>
      {ads.map(ad => <p>{ad}</p>)}

    <AdList />
    </>
  );
}

export default Home