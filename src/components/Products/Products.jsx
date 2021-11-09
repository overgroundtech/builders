import React, { useContext, useEffect } from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import Loader from 'react-loader-spinner';
import ProductCard from './ProductCard';
import {PRODUCTS_QUERY} from "../../graphql/query";
import {ProductContext} from "../../Context/ProductContext";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      justifyContent: 'space-between',
      overflow: 'hidden',
      marginTop: theme.spacing(1),
      boxShadow: '0 0 6px hsl(210 14% 80%)',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
  }
})

export default function Products() {
    const { loading, error, data } = useQuery(PRODUCTS_QUERY);
    const {products, setProducts} = useContext(ProductContext)
    const classes = useStyles();
    
    useEffect(() => {
        if (data){setProducts(data.products)}
    },[data, setProducts])
    
    if (loading) return <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />;
    if (error) return <Typography color={error}>Something went wrong...</Typography>;

    return (
        <Container variant={"xs"} className={classes.root} >
            <Typography variant={"h5"} color={"textSecondary"}>
                Top Selling
            </Typography>
            <hr/>
            {products.map(product => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </Container>
    )
}