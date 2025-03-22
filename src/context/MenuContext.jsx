import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000"


export const MenuContext = createContext();

function MenuProvider({ children }) {
    const [foods, setFoods] = useState([])
    const [category, setCategory] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/foods`)
            .then((res) => res.json())
            .then((data) => setFoods(data))
    }, [])

    useEffect(() => {
        fetch(`${BASE_URL}/users`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    useEffect(() => {
        fetch(`${BASE_URL}/category`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
    }, [])

    return <MenuContext.Provider value={{ foods, category, users }}>
        {children}
    </MenuContext.Provider>
}

function useFoods() {
    const context = useContext(MenuContext)
    if (context === undefined) throw new Error("FoodsContext was used outside the CititesProvider")
    return context
}

export { MenuProvider, useFoods }

