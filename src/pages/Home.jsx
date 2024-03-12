import { useContext } from "react"
import { GlobalContext } from "../GlobalContext"
import AdList from "../components/AdList"


function Home() {

  //const { ads, setAds } = useContext(GlobalContext)
  //console.log(ads)

  return (
    <>
      <AdList />

    </>
  );
}

export default Home