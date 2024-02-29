import { Link } from "react-router-dom"

function Nav() {

  return <nav>
    <Link to="/">Home</Link> |&nbsp;
    <Link to="/form">Form</Link> |&nbsp;
    <Link to="/createOffer">Skapa annons test</Link> |&nbsp;

  </nav>
}

export default Nav