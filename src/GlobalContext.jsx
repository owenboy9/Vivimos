import { createContext, useState } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const [ads, setAds] = useState(["Mock1", "Mock2"])

    return <GlobalContext.Provider value={{ ads, setAds }}>
        {children}
    </GlobalContext.Provider>
}


export { GlobalProvider, GlobalContext }