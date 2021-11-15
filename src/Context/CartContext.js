import { useState, useMemo, createContext, useEffect } from 'react';
import  { v4 } from 'uuid';

export const CartContext = createContext([]);


export default function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const providerValue = useMemo(()=>({cart, setCart}), [cart, setCart]);

    useEffect(() => {
        if(localStorage.getItem('cartId') == null){
            const cartId = v4();
            localStorage.setItem('cartId', cartId);
        }
    })

    return (
        <CartContext.Provider value={providerValue}>
            {children}
        </CartContext.Provider>
    );
}
