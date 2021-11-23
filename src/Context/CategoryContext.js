import { useState, useMemo, createContext, useEffect } from 'react';
import {Typography} from '@material-ui/core';
import Loader from 'react-loader-spinner';
import { useQuery } from '@apollo/client';
import { CATEGORY_PRODUCTS } from '../graphql/query';

export const CategoryContext = createContext([])

export default function CategoryProvider({children}) {
    const [catProds, setCatProds] = useState([]);
    const {loading, data, error} = useQuery(CATEGORY_PRODUCTS);
    const providerValue = useMemo(()=> ({catProds, setCatProds}), [catProds, setCatProds]);
    
    useEffect(() => {
        if(data){
            setCatProds(data.categoryProducts);
        }
    }, [data, setCatProds])

    if (error) return <Typography>something went wrong!!</Typography>
    if (loading) return <Loader type="TailSpin" color="#00BFFF" height={100} width={100} timeout={10000} />;


    return (
        <CategoryContext.Provider value={providerValue}>
            {children}
        </CategoryContext.Provider>
    )
}
