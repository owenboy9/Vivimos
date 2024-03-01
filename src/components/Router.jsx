import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav.jsx"
import Home from "../pages/Home.jsx"
import Login from "./Login.jsx"
// import Header from "./Header.jsx"



function Router() {

  return (
    <BrowserRouter>

      <Nav />
      <Routes>
        {/*<Route path="/" element={<Header />} />*/}
        
        <Route path="/" element={<Home />} /> {/*kan va självstängande element om det inte händer något mellan taggarna*/}
        <Route path="/login" element={<Login />} /> {/*kan va självstängande element om det inte händer något mellan taggarna*/}


      </Routes>
    </BrowserRouter>
  )

}

export default Router