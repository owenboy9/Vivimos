import { createContext, useState } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const [ads, setAds] = useState(["Mock1", "Mock2"])
    const [mockUsers, setMockUsers] = useState([])

    return <GlobalContext.Provider value={{ ads, setAds, mockUsers, setMockUsers }}>
        {children}
    </GlobalContext.Provider>
}


export { GlobalProvider, GlobalContext }