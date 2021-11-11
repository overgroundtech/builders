import { useState, useMemo, createContext } from 'react';

export const CategoryContext = createContext([])

export default function CategoryProvider({children}) {
    const [catProds, setCatProds] = useState([]);
    const providerValue = useMemo(()=> ({catProds, setCatProds}), [catProds, setCatProds])


    return (
        <CategoryContext.Provider value={providerValue}>
            {children}
        </CategoryContext.Provider>
    )
}
