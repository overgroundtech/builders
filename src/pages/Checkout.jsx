import React, { useContext, useEffect } from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import { UserContext } from '../Context/UserContext';
import { useHistory } from 'react-router-dom';
import CheckoutForm from '../components/Checkout/checkoutForm';

const useStyles = makeStyles(theme=> ({
    page: {
        marginTop: theme.spacing(4),
        textAlign: 'center'
    }
}))

export default function Checkout(){
    const history = useHistory();
    const {user} = useContext(UserContext);
    useEffect(() => {
        if(!user){
            history.push('/login');
        }
    })
    const classes = useStyles();
    return (
        <Container className={classes.page}>
            <Typography variant={'h4'} gutterBottom>Checkout Form</Typography>
            <CheckoutForm user={user} />
        </Container>
    )
}