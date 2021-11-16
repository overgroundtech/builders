import React from 'react';
import {Grid} from "@material-ui/core";
import ProductCard from "./ProductCard";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    products: {
        marginTop: theme.spacing(1)
    }
}))

export default function Products({products}) {
    const classes = useStyles();
  return (
      <Grid container spacing={2} className={classes.products} >
          {products && products.map(product => (
              <Grid key={product.id} item xs={6} sm={4} md={3}>
                  <ProductCard product={product}/>
              </Grid>
          ))}
      </Grid>
  );
}
