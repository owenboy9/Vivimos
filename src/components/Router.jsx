import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav.jsx"
import Home from "../pages/Home.jsx"



function Router() {

  return (
    <BrowserRouter>

      <Nav />
      <Routes>
        {/*Our route definitions(controller)*/}

        <Route path="/" element={<Home />} /> {/*kan va självstängande element om det inte händer något mellan taggarna*/}

      </Routes>
    </BrowserRouter>
  )

}

export default Router