import React from 'react';
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
    Typography
} from '@material-ui/core';
import CartItem from "./CartItem";

const useSytes = makeStyles(theme => ({

}))

export default function CartContainer({cart}){
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
                    <Table>
                    <TableBody>
                    <TableRow>
                            <TableCell component="th">
                                No. of Items
                            </TableCell>
                            <TableCell>
                                {cart.count}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th">
                                Total
                            </TableCell>
                            <TableCell>
                                {cart.summary} ksh
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}