import React, {useEffect, useContext} from 'react';
import Container  from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import SidebarWrapper from "../components/sidebar/SidebarWrapper";
import Carousel from '../components/Carousel/Carousel';
import PaginateProducts from '../components/Products/PaginateProducts';
import { useQuery } from '@apollo/client';
import { CATEGORY_PRODUCTS } from '../graphql/query';
import Loader from "react-loader-spinner";
import {Typography} from "@material-ui/core";
import {CategoryContext} from "../Context/CategoryContext";
import {CartContext} from "../Context/CartContext";

export default function Home() {
    const {setCatProds} = useContext(CategoryContext);
    const {setCart} = useContext(CartContext);
    const {loading, error, data} = useQuery(CATEGORY_PRODUCTS, {variables: {cartId: new String(localStorage.getItem('cartId'))}});

    useEffect(() => {
        if(data){
            setCatProds(data.categoryProducts)
            setCart(data.cart)
        }
    }, [data, setCatProds, setCart]
    );

    if (loading) return <Loader type="TailSpin" color="#00BFFF" height={100} width={100} timeout={10000} />;
    if (error) return <Typography>Something went wrong...</Typography>;

    return (
    
        <>
            <Carousel />
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12}  md={3}>
                        <SidebarWrapper />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <PaginateProducts />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}