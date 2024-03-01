import { createContext, useState } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const [ads, setAds] = useState(["Mock1", "Mock2"])
    const [user, setUser] = useState([])
    const [loggedIn, setLoggedIn] = useState({})

    return <GlobalContext.Provider value={{ ads, setAds, user, setUser, loggedIn, setLoggedIn }}>
        {children}
    </GlobalContext.Provider>
}


export { GlobalProvider, GlobalContext }