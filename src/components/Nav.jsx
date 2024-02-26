import { Link } from "react-router-dom"

function Nav() {

  return <nav>
    <Link to="/">Home</Link> |&nbsp;
    <Link to="/createOffer">Skapa annons</Link> |&nbsp;

  </nav>
}

export default Nav