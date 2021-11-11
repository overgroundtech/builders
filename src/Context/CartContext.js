import { useState, useMemo, createContext } from 'react';


export const CartContext = createContext([]);


export default function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const providerValue = useMemo(()=>({cart, setCart}), [cart, setCart]);
    return (
        <CartContext.Provider value={providerValue}>
            {children}
        </CartContext.Provider>
    );
}
