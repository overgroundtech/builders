import React, {useContext} from 'react';
import { makeStyles, Card, CardMedia, CardActionArea, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {CartContext} from '../../Context/CartContext';
import {ADD_ITEM} from '../../graphql/mutation';
import {AlertContext} from '../../Context/alertContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  },
    btn: {
      width: '100%',
    },
    prices: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    oldPrice: {
      textDecoration: 'line-through',
    }
});

export default function ProductCard({product}) {
    const {setCart} = useContext(CartContext);
    const {setOpen, setMessage} = useContext(AlertContext);
    const [addItem] = useMutation(ADD_ITEM);
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea onClick={() => history.push(`/products/${product.id}`) }>
                    <CardMedia
                        className={classes.media}
                        image={product.images[0]? product.images[0] : 'https://media.istockphoto.com/photos/bathroom-faucet-picture-id182691828?b=1&k=20&m=182691828&s=170667a&w=0&h=gZj86NU5-6ocvWuFUeh8rLJwOOsaK7Y-vhwOeSWz4U4='}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography variant="h6">
                            {product.name.toUpperCase()}
                        </Typography>
                        <div className={classes.prices}>

                            <Typography color={"secondary"} variant="body1">
                                 {product.price} KSH
                            </Typography>
                            {product.offer ? <Typography variant={"body2"} className={classes.oldPrice} color="textSecondary" >{product.discount} ksh </Typography> : null}

                        </div>
                            <Typography variant="body2" color="textSecondary" noWrap component="p">
                                {product.description}
                            </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        className={classes.btn}
                        variant="outlined"
                        color="secondary"
                        onClick={ async () => {
                            try{
                                const {data} =await addItem({
                                    variables: {
                                        cartId: new String(localStorage.getItem('cartId')),
                                        productId: product.id,
                                        quantity: 1
                                    }
                                })
                                setMessage('item was added to cart!')
                                setOpen(true)
                                setCart(data.addItem.cart)
                                setTimeout(() => {
                                    setOpen(false);
                                    setMessage('')
                                }, 4000)
                            }catch(err){
                                console.log(err)
                        } }}
                    >
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
