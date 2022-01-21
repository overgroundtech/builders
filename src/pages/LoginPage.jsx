import React from 'react';
import Login from '../components/Auth/Login';
import {makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4)
    }
}));

export default function LoginPage () {
    const classes = useStyles();
    return(
        <Grid className={classes.root} container spacing={1}>
            <Grid item xs={1} md={2} lg={3} />
            <Grid item xs={10} md={8} lg={6} > <Login /> </Grid>
            <Grid item xs={1} md={2} lg={3} />
        </Grid>
    )
}