import React, {useContext, useState} from 'react';
import {makeStyles, TableCell, TableRow, IconButton, ButtonGroup, Typography} from "@material-ui/core";
import { DeleteForeverOutlined, AddOutlined,  Remove} from '@material-ui/icons';
import {useMutation} from '@apollo/client';
import {CartContext} from '../../Context/CartContext';
import {REMOVE_ITEM} from '../../graphql/mutation';

const useStyles = makeStyles(theme => ({
    cartImage: {
        maxWidth: theme.spacing(8),
        height: 'auto'
    },
    quantity:{
        display: 'flex',
        alignItems: 'center'
    }, 
    text: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

export default function CartItem({item}) {
    const {setCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState()
    const [removeItem] = useMutation(REMOVE_ITEM);
    const classes = useStyles();
    return (
        <TableRow key={item.product.id}>
            <TableCell >
                <img className={classes.cartImage} src={item.product.images[0]} alt={item.product.name} />
            </TableCell>
            <TableCell align="left">{item.product.name}</TableCell>
            <TableCell align="left">{item.unitPrice}</TableCell>
            <TableCell align="left">
                <div className={classes.quantity}>
                        <IconButton size="small" color="secondary" edge="end" >
                            <Remove/>
                        </IconButton>
                        <Typography className={classes.text} > {item.quantity} </Typography>
                        <IconButton size="small" color="secondary" edge="start" >
                            <AddOutlined />
                        </IconButton>
                </div>
            </TableCell>
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