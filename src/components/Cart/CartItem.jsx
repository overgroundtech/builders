import React, {useContext} from 'react';
import {makeStyles, TableCell, TableRow, IconButton} from "@material-ui/core";
import { DeleteForeverOutlined } from '@material-ui/icons';
import {useMutation} from '@apollo/client';
import {CartContext} from '../../Context/CartContext';
import {REMOVE_ITEM} from '../../graphql/mutation';

const useStyles = makeStyles(theme => ({
    cartImage: {
        maxWidth: theme.spacing(8),
        height: 'auto'
    }
}));

export default function CartItem({item}) {
    const {setCart} = useContext(CartContext);
    const [removeItem] = useMutation(REMOVE_ITEM);
    const classes = useStyles();
    return (
        <TableRow key={item.product.id}>
            <TableCell >
                <img className={classes.cartImage} src={item.product.images[0]} alt={item.product.name} />
            </TableCell>
            <TableCell align="left">{item.product.name}</TableCell>
            <TableCell align="left">{item.unitPrice}</TableCell>
            <TableCell align="left">{item.quantity}</TableCell>
            <TableCell align="left">{item.total}</TableCell>
            <TableCell align="left">
                <IconButton onClick={async ()=>{
                    const {data} = await removeItem({
                        variables: {
                            cartId: new String(localStorage.getItem('cartId')),
                            productId: parseInt(item.product.id)
                        }
                    })
                    if (data){
                        setCart(data.removeItem.cart)
                    }
                }}>
                    <DeleteForeverOutlined  color="error" />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}