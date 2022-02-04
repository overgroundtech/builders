import React, { useContext, useEffect } from 'react';
import { makeStyles, Container, Typography, Grid } from '@material-ui/core';
import { UserContext } from '../Context/UserContext';
import { useHistory } from 'react-router-dom';
import CheckoutForm from '../components/Checkout/checkoutForm';
import MiniCart from '../components/Checkout/MiniCart';

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
            <Grid container spacing={2}>
                <Grid xs={12} md={8}>
                    <CheckoutForm user={user} />
                </Grid>
                <Grid xs={12} md={4}>
                    <MiniCart />
                </Grid>
            </Grid>

        </Container>
    )
}