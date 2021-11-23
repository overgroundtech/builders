import { useState, useMemo, createContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {Typography} from '@material-ui/core';
import Loader from 'react-loader-spinner';
import  { v4 } from 'uuid';
import { CART_QUERY } from '../graphql/query';

export const CartContext = createContext([]);


export default function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const { loading, data, error } = useQuery(CART_QUERY, {
        variables:{
            cartId: new String(localStorage.getItem('cartId'))
        }
    });


    const providerValue = useMemo(()=>({cart, setCart}), [cart, setCart]);

    useEffect(() => {
        if(localStorage.getItem('cartId') == null){
            const cartId = v4();
            localStorage.setItem('cartId', cartId);
        }
        if(data){
            setCart(data.cart);
        }
    }, [data, setCart])

    if (error) return <Typography>something went wrong!!</Typography>
    if (loading) return <Loader type="TailSpin" color="#00BFFF" height={100} width={100} timeout={10000} />;

    return (
        <CartContext.Provider value={providerValue}>
            {children}
        </CartContext.Provider>
    );
}
