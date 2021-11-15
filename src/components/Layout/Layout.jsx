import React from 'react';
import Navbar from './Navbar';
import { makeStyles, Toolbar } from '@material-ui/core';
import Footer from '../footer/Footer';


const useStyles = makeStyles(theme => ({
    toolbar: {
        marginBottom: theme.spacing(3)
    }
}));

export default function Layout({ children }) {
    const classes = useStyles()
    return (
        <>
            <Navbar />
           <Toolbar className={classes.toolbar} />
            {children}
            <Footer/>
        </>
     )
}