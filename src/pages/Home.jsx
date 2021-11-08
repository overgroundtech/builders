import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Container  from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import Carousel from '../components/Carousel/Carousel';
import Products from '../components/Products/Products';

export default function Home() {

    return (
    
        <>
            <Carousel />
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={3} lg={3} sm={4} >
                        <Sidebar/>
                    </Grid>
                    <Grid item sm={12} md={8} lg={9}>
                        <Products />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}