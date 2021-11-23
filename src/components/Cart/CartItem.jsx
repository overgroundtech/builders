import React, {useContext, useState} from 'react';
import {makeStyles, TableCell, TableRow, TextField, IconButton} from "@material-ui/core";
import { DeleteForeverOutlined, CheckCircle, FlashOffRounded } from '@material-ui/icons';
import {useMutation} from '@apollo/client';
import {CartContext} from '../../Context/CartContext';
import {REMOVE_ITEM, UPDATE_ITEM} from '../../graphql/mutation';
import { AlertContext } from '../../Context/alertContext';


const useStyles = makeStyles(theme => ({
    cartImage: {
        maxWidth: theme.spacing(8),
        height: 'auto'
    },
    quantity:{
        alignItems: 'center'
    }, 
    input: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: theme.spacing(10),
    }
}));

export default function CartItem({item}) {
    const {setMessage, setOpen} = useContext(AlertContext);
    const {setCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(item.quantity)
    const [check, setCheck] = useState(false);
    const [removeItem] = useMutation(REMOVE_ITEM);
    const [updateItem] = useMutation(UPDATE_ITEM);
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
                    <TextField type="number" className={classes.input} variant="outlined" size="small" onChange={(e)=> {
                        setCheck(true);
                        if(e.target.value <= 0){
                            setQuantity(1)
                        }else{
                            setQuantity(e.target.value);
                        }
                    }} value={quantity} />
                    {check?
                    <IconButton size="small" color="secondary" onClick={
                        async () => {
                            const {data} = await updateItem({
                                variables:{
                                    cartId: new String(localStorage.getItem('cartId')),
                                    productId: item.product.id,
                                    quantity: parseInt(quantity)
                                }
                            });
                            setCheck(false);
                            setCart(data.updateItem.cart);
                            setMessage('cart item has been updated');
                            setOpen(true);
                            setTimeout(() => {
                                setOpen(false);
                                setMessage('');
                            }, 4000)
                        }
                    }>
                        <CheckCircle />
                    </IconButton>: null}
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
                    setMessage('item was removed from cart');
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false);
                        setMessage('')
                    }, 4000)
                }}>
                    <DeleteForeverOutlined  color="error" />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}