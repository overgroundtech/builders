import React from 'react';
import {Grid} from "@material-ui/core";
import ProductCard from "./ProductCard";

export default function Products({products}) {
  return (
      <Grid container spacing={2}>
          {products && products.map(product => (
              <Grid key={product.id} item xs={12} sm={4} md={3}>
                  <ProductCard product={product}/>
              </Grid>
          ))}
      </Grid>
  );
}