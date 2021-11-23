import React, {useEffect, useContext} from 'react';
import Container  from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import SidebarWrapper from "../components/sidebar/SidebarWrapper";
import Carousel from '../components/Carousel/Carousel';
import PaginateProducts from '../components/Products/PaginateProducts';


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
                        <PaginateProducts />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}