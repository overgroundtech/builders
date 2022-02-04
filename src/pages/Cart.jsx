import React, { useContext, useEffect } from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import CartContainer from "../components/Cart/Cart";
import { CartContext } from "../Context/CartContext";
import { useQuery } from "@apollo/client";
import { CART_QUERY } from "../graphql/query";
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
}));

export default function Cart() {
  // const { loading, error, data } = useQuery(CART_QUERY, {
  //   variables: { cartId: new String(localStorage.getItem("cartId")) },
  // });
  const { cart, setCart } = useContext(CartContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth={"xl"} className={classes.container}>
        <CartContainer cart={cart} />
      </Container>
    </>
  );
}
