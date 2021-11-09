import { useState, useMemo, createContext } from 'react';

export const ProductContext = createContext();

export function ProductProvider({children}){
    const[products, setProducts] = useState([]);
    const providerValue = useMemo(() => ({products, setProducts}), [products, setProducts]);
    return (
        <ProductContext.Provider value={providerValue}>
            {children}
        </ProductContext.Provider>
    )
}