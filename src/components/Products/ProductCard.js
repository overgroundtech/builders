import React from 'react';
import { makeStyles, Card, CardMedia, CardActionArea, CardContent, Typography, CardActions, Button, Badge } from '@material-ui/core';

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
    const classes = useStyles()

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product.images[0]}
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
                    <Button className={classes.btn} variant="outlined" color="secondary">
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
