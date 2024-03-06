import { Link } from "react-router-dom"
import '../assets/styles/nav.css'

function Nav() {

  return <nav>
    <Link to="/">Hem</Link> &nbsp;
    <Link to="/Test">Test</Link> &nbsp;

  </nav>
}

export default Nav