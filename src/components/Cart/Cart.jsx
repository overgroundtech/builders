import React, {useContext} from 'react';
import {
    makeStyles,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button
} from '@material-ui/core';
import CartItem from "./CartItem";
import {UserContext} from '../../Context/UserContext';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(theme => ({

}))

export default function CartContainer({cart}){
    const {login, setRedirect} = useContext(UserContext);
    const history = useHistory();

    const checkout = () => {
        if(login){
            history.push('/checkout');
        }else{
            setRedirect('/checkout')
            history.push('/login');
        }
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="h6"> Your Cart</Typography></TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.items && cart.items.map(item => (
                                <CartItem key={item.product.id} item={item} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
                <TableContainer component={Paper} >
                    <Typography variant="h5">Cart Total </Typography>
                    <Table component="div">
                    <TableBody component="div">
                    <TableRow component="div">
                            <TableCell component="div">
                                No. of Items
                            </TableCell>
                            <TableCell component="div">
                                {cart.count}
                            </TableCell>
                        </TableRow>

                        <TableRow component="div">
                            <TableCell component="div">
                                Total
                            </TableCell >
                            <TableCell component="div">
                                {cart.summary} ksh
                            </TableCell>
                        </TableRow>
                        <TableRow component="div">
                            <TableCell component="div">
                                <Button variant="contained" color="secondary" onClick={checkout} > Checkout </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}