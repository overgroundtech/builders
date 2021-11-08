import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import ProductCard from './ProductCard';



const useStyles = makeStyles((theme) => {
  return {
    root: {
      justifyContent: 'space-around',
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
    const classes = useStyles();

    return (
        <Container variant={"xs"} className={classes.root} >
            <Typography variant={"h5"} color={"textSecondary"}>
                Top Selling
            </Typography>
        </Container>
    )
}