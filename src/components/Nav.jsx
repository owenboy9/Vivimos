import { Link } from "react-router-dom"

function Nav() {

  return <nav>
    <Link to="/">Home</Link> |&nbsp;
    <Link to="/login">Log in</Link> |&nbsp;

  </nav>
}

export default Nav