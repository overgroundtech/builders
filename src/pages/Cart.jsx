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
  const { loading, error, data } = useQuery(CART_QUERY, {
    variables: { cartId: new String(localStorage.getItem("cartId")) },
  });
  const { cart, setCart } = useContext(CartContext);
  const classes = useStyles();

  useEffect(() => {
    if (data) {
      setCart(data.cart);
    }
  }, [data, setCart]);

  if (loading)
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000}
      />
    );
  if (error) return <Typography>Something went wrong...</Typography>;

  return (
    <>
      <Container maxWidth={"xl"} className={classes.container}>
        <CartContainer cart={cart} />
      </Container>
    </>
  );
}
