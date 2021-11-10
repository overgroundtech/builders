import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Typography, Container, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import Loader from 'react-loader-spinner';
import Products from './Products';
import {PRODUCTS_QUERY} from "../../graphql/query";
import {ProductContext} from "../../Context/ProductContext";
import ReactPaginate from 'react-paginate';

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
        products: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        paginationContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            listStyle: 'none'
        },
        paginationList: {
            listStyle: 'none'
        },
        pageLink: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(1),
            border: '1px solid hsl(210 14% 80%)',
            borderRadius: '5px',
            margin: theme.spacing(1),
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                color: 'white',
            }
        },
        activePageLink: {
            backgroundColor: theme.palette.secondary.light,
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                color: 'white',
            }
        },
    }
})

export default function PaginateProducts() {
    const { loading, error, data } = useQuery(PRODUCTS_QUERY);
    const {products, setProducts} = useContext(ProductContext)

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemsOffset, setItemsOffset] = useState(0);

    const classes = useStyles();

    useEffect(() => {
        const endOffset = itemsOffset + 12;
        setCurrentItems(products.slice(itemsOffset, endOffset));
        setPageCount(Math.ceil(products.length / 12));
    }, [itemsOffset, products]);



    useEffect(() => {
        if (data){setProducts(data.products)}
    },[data, setProducts])

    if (loading) return <Loader type="TailSpin" color="#00BFFF" height={100} width={100} timeout={3000} />;
    if (error) return <Typography color={error}>Something went wrong...</Typography>;

    return (
        <Container variant={"xs"} className={classes.root} >
            <Typography variant="body2" color="textSecondary">
                All
            </Typography>
            <hr/>
            <Products className={classes.products} products={currentItems} />
            <ReactPaginate
                breakLabel={'...'}
                nextLabel={'Next >'}
                onPageChange={({ selected }) => setItemsOffset(selected * 12)}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={'< Previous'}
                rederOnZeroPageCount={null}
                containerClassName={classes.paginationContainer}
                pageLinkClassName={classes.pageLink}
                previousClassName={classes.pageLink}
                nextClassName={classes.pageLink}
                activeLinkClassName={classes.activePageLink}
            />
        </Container>
    )
}