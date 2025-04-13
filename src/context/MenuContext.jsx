import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000"


export const MenuContext = createContext();

// function reducer(state, action) {
//     switch (action.type) {
//  case 
//     }
// }

// const initialState = {
//     showSidebar: false
// }

function MenuProvider({ children }) {
    const [foods, setFoods] = useState([])
    const [category, setCategory] = useState([])
    const [users, setUsers] = useState([])
    const [showSidebar, setShowSidebar] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [foodDetails, setFoodDetails] = useState("")
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        async function fetchFoods() {
            try {
                const res = await fetch(`${BASE_URL}/foods`)
                const data = await res.json()
                await setFoods(data)
                console.log(data)
            }
            catch {
                console.log("Menu yüklənərkən problem yarandı")
            }
        }
        fetchFoods()
        // fetch(`${BASE_URL}/foods`)
        //     .then((res) => res.json())
        //     .then((data) => setFoods(data))
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


    // const fetchData = (urlKey) => {
    //     fetch(`${BASE_URL}/${urlKey}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         switch urlKey
    //     }
    // }

    // create new product

    async function createProduct(newProduct) {
        const res = await fetch(`${BASE_URL}/foods`, {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    return <MenuContext.Provider value={{
        foods, category, users, showSidebar,
        setShowSidebar, showDetails, setShowDetails,
        foodDetails, setFoodDetails, createProduct,
        showModal, setShowModal
    }}>
        {children}
    </MenuContext.Provider>
}

function useFoods() {
    const context = useContext(MenuContext)
    if (context === undefined) throw new Error("FoodsContext was used outside the MenuProvider")
    return context
}

export { MenuProvider, useFoods }

