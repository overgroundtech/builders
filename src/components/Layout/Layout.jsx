import React from 'react';
import Navbar from './Navbar';
import { makeStyles, Toolbar } from '@material-ui/core';
import Footer from '../footer/Footer';


const useStyles = makeStyles(theme => ({
    toolbar: {
        marginBottom: theme.spacing(3)
    },
    page: {
        minHeight: '60vh',
        height: 'fit-content'
    },
}));

export default function Layout({ children }) {


    const classes = useStyles()
    return (
        <>
            <Navbar />
           <Toolbar className={classes.toolbar} />
            <div className={classes.page}>
            {children}
            </div>
            <Footer className={classes.footer} />
        </>
     )
}
