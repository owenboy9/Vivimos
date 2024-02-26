import Router from "./components/Router.jsx"
import { GlobalProvider } from './GlobalContext'

function App() {

  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  )
}

export default App
