import React from 'react';
import Container  from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import SidebarWrapper from "../components/sidebar/SidebarWrapper";
import Carousel from '../components/Carousel/Carousel';
import Products from '../components/Products/Products';

export default function Home() {

    return (
    
        <>
            <Carousel />
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12}  md={3}>
                        <SidebarWrapper />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Products />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}