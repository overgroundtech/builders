import React, {useContext} from 'react';
import Navbar from './Navbar';
import { makeStyles, Toolbar } from '@material-ui/core';
import Footer from '../footer/Footer';
import {IconButton, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Cancel } from '@material-ui/icons';
import {AlertContext} from '../../Context/alertContext';


const useStyles = makeStyles(theme => ({
    toolbar: {
        marginBottom: theme.spacing(3)
    },
    page: {
        minHeight: '70vh',
        height: 'fit-content'
    },
    alert: {
        position: '-webkit-sticky',
        position: 'sticky',
        top: 20,
        bottom: 20, 
        zIndex: 5,
        left: '4%',
        width: 'fit-content',

    }
}));

export default function Layout({ children }) {
    const {open, message, setOpen} = useContext(AlertContext);

    const classes = useStyles()
    return (
        <>
            <Navbar />
           <Toolbar className={classes.toolbar} />
            <div className={classes.page}>
            {children}
            </div>
            <Collapse in={open} className={classes.alert}>
                <Alert
                variant="filled"
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                    <Cancel fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                {message}
                </Alert>
            </Collapse>
            <Footer className={classes.footer} />
        </>
     )
}