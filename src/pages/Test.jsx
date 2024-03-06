import { useContext } from "react"
import { GlobalContext } from "../GlobalContext"


function Test() {

  const { ads, setAds } = useContext(GlobalContext)
  console.log(ads)

  return (
    <>
    <h1>Hej detta är testsidan</h1>
    </>
  );
}

export default Test