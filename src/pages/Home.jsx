import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Container  from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import Sidebarmobile from '../components/sidebar/Siderbarmobile';
import { Paper } from '@material-ui/core';
import Carousel from '../components/Carousel/Carousel';

export default function Home() {

    return (
    
        <>
            <Carousel />
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={3} lg={3} sm={4} >
                        <Sidebar/>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} sm={4} >
                        <Sidebarmobile/>
                    </Grid>
                    <Grid item sm={12} md={8} lg={9}>
                        <Paper elevation={4} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}