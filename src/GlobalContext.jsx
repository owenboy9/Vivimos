import { createContext, useState } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const [ads, setAds] = useState(["Mock1", "Mock2"])
    const [user, setUser] = useState([])

    return <GlobalContext.Provider value={{ ads, setAds, user, setUser }}>
        {children}
    </GlobalContext.Provider>
}


export { GlobalProvider, GlobalContext }