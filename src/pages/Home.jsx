import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Container  from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import Sidebarmobile from '../components/sidebar/Siderbarmobile';
// import { Paper } from '@material-ui/core';

export default function Home() {

    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={3} sm={4} lg={2} >
                    <Sidebar/>
                </Grid>
                <Grid item xs={12} >
                    <Sidebarmobile/>
                </Grid>
                {/* <Grid item sm={12} md={8} lg={9}>
                    <Paper elevation={4} />
                </Grid> */}
            </Grid>
        </Container>
    );
}