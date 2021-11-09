import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core';
import Footer from '../footer/Footer';


const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar
}));

export default function Layout({ children }) {
    const classes = useStyles()
    return (
        <>
            <Navbar /> 
            <div className={classes.toolbar} />
            {children}
            <Footer/>
        </>
     )
}