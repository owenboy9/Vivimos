import { useContext } from "react"
import { GlobalContext } from "../GlobalContext"
import AdList from "../components/AdList"


function Home() {

  //const { ads, setAds } = useContext(GlobalContext)
  //console.log(ads)

  return (
    <>
      <AdList />
      <div className='itemCard-container'>
        <div className='ad-info'>
          <li>en annons
            <h3>link</h3>
            <p>En x år gammal  person, från en län <br /> som är något och bor i en stad.</p>
          </li>
        </div>
        <div className='ad-right'>
          <button>Lägg ett bud</button>
        </div>
      </div>
    </>
  );
}

export default Home