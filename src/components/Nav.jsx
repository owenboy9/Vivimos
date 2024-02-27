import { Link } from "react-router-dom"

function Nav() {

  return <nav>
    <Link to="/">Home</Link> |&nbsp;
    <Link to="/createOffer">Skapa annons</Link> |&nbsp;
    <Link to="/createOffer2">Skapa annons test</Link> |&nbsp;


  </nav>
}

export default Nav