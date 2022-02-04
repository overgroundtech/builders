import React, {useContext} from 'react';
import {
    makeStyles,
    Typography,
    Paper,    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button
} from '@material-ui/core';
import { CartContext } from '../../Context/CartContext';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px',
        marginTop: theme.spacing(2)
    },
    div: {
        padding: '10px'
    },
    items: {
        padding: 4,

    }
}))

export default function MiniCart(){
    const classes = useStyles();
    const history = useHistory();
    const {cart} = useContext(CartContext);
    return (
        <Paper elevation={1} className={classes.root}>
            <Typography variant={'h6'} gutterBottom>Your Cart</Typography>
            <hr/>
            <div className={classes.div}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                cart.items && cart.items.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.product.name}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.total}</TableCell>
                                    </TableRow>
                                ))
                            }
                            <TableRow>
                                <TableCell>Total</TableCell>
                                <TableCell></TableCell>
                                <TableCell>{cart.summary}</TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer>
            </div>
            <div className={classes.div}>
                <Button variant={'contained'} color={'primary'} onClick={() => history.push('/') }>Go Back To Shopping</Button>
            </div>
        </Paper>
    )
}