import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  InputBase,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import back from "../../src/images/back.png";
import { Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Carousel } from "react-responsive-carousel";
import { useQuery } from "@apollo/client";
import { PRODUCT } from "../graphql/query";
import { ADD_ITEM } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { CartContext } from "../Context/CartContext";
import Products from "../components/Products/Products";
import ProductDetailsContent from "../components/Products/ProductDetailsContent";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    display: "flex",
    marginTop: theme.spacing(1),
  },
  root2: {
    display: "flex",
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(1),
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1),
    },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  productDetailImage: {
    width: "100%",
    "&:hover": {
      cursor: "pointer",
    },
  },
  productDetailSmall: {
    display: "flex",
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
    "&:hover": {
      cursor: "pointer",
    },
    // justifyContent : 'start',
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
  },
  productDescContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(0, 0, 0, 0.09)",
    marginTop: theme.spacing(1),
    // margin : theme.spacing(2),
    height: theme.spacing(30),
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.09)",
  },
  quantityBox: {
    display: "flex",
    border: "1px solid rgba(0, 0, 0, 0.25)",
    borderColor: "#000",
    borderRadius: "5px",
    WebkitBoxShadow: "0px 0px 5px 0px rgba(0,0,0,1)",
    width: "50px",
    height: "30px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    margin: theme.spacing(1),
    marginLeft: theme.spacing(5),
    "&:hover": {
      cursor: "pointer",
    },
  },
  quantityAndAddContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: theme.spacing(30),
    alignItems: "center",
    margin: theme.spacing(1),
  },
  textField: {
    // backgroundColor:'red',
    width: "90%",
    marginLeft: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  searchMediaDelivery: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
  },
  search: {
    display: "flex",
  },
  facebookHolder: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(10),
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.09)",
  },

  facebookIframe: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100px",
    border: "1px solid rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    justifyContent: "center",
  },
  facebookLikeImage: {
    backgroundImage: `url(${back})`,
    position: "relative",
    objectFit: "contain",
    width: "70%",
    height: "70%",
  },
  categoryLinks: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5px",
  },
  socialLink: {
    display: "flex",
    flexDirection: "row",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
    cursor: "pointer",
  },
  link: {
    backgroundColor: "#FF8C00",
    color: "white",
    borderRadius: "5px",
    margin: "2px",
    padding: "5px",
  },
  description: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    height: theme.spacing(50),
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(10),
    [theme.breakpoints.up("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  butonsContainer: {
    display: "flex",
    // marginLeft:'auto',
  },
  buttonSelf: {
    // backgroundColor:'orange',
    width: "20px",
    height: "30px",
    marginTop: "10px",
  },
  InputBaseCont: {
    width: theme.spacing(10),
    height: theme.spacing(3),
  },
  addtoCart: {
    display: "flex",
    height: "30px",
    width: "70%",
  },
  relatedProductsCont: {
    // textAlign:'center'
  },
  relatedProdsText: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
    fontWeight: "bold",
  },
}));

function ProductDetail({ match }) {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(0);
  const [addtoCart] = useMutation(ADD_ITEM);
  const { setCart } = useContext(CartContext);

  const { loading, error, data } = useQuery(PRODUCT, {
    variables: { productId: parseInt(match.params.id) },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  // console.log(quantity)

  return (
    <>
      <Container>
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12} sm={4} className={classes.imageContainer}>
            <Carousel>
              {data.product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={image.alt}
                    className={classes.productDetailImage}
                  />
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.productDescContainer}>
            <Typography variant="h5">{data.product.name}</Typography>
            <Typography variant="h6">${data.product.price}</Typography>
            <div className={classes.quantityAndAddContainer}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                onClick={() => {
                  if (quantity <= 1) {
                    setQuantity(1);
                  } else {
                    setQuantity(quantity - 1);
                  }
                }}
                className={classes.buttonSelf}
              >
                -
              </Button>
              <TextField
                type="number"
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                variant="outlined"
                size="small"
                className={classes.InputBaseCont}
                value={quantity}
              />
              <Button
                onClick={() => setQuantity(quantity + 1)}
                size="small"
                variant="outlined"
                color="secondary"
                className={classes.buttonSelf}
              >
                +
              </Button>
            </div>
            <Button
              // variant="outlined"
              onClick={async () => {
                try {
                  const { data: cartData } = await addtoCart({
                    variables: {
                      cartId: new String(localStorage.getItem("cartId")),
                      productId: data.product.id,
                      quantity: quantity,
                    },
                  });
                  setCart(cartData.addItem.cart);
                } catch (err) {
                  console.log(err);
                }
              }}
              className={classes.addtoCart}
              variant="outlined"
              color="secondary"
              size="small"
            >
              Add to Cart
            </Button>
            <div className={classes.facebookHolder}>
              <Typography variant="h6">Like us on facebook</Typography>
              <div>
                <iframe
                  className={classes.facebookIframe}
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbuilderspointke%2F&tabs=timeline&width=400&height=100&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} className={classes.description}>
            <Grid>
              <Typography variant="h6">Delivery Information</Typography>
              <Typography variant="body1">
                Same Day Delivery in Nairobi and 24 hours max delevery
                countrywide
              </Typography>
            </Grid>
            <br />
            <Grid>
              <Typography variant="h6">Return and Refunds</Typography>
              <Typography variant="body1">
                Easy Returns and Quick refunds
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <ProductDetailsContent value={data.product.description} />
        <div className={classes.relatedProductsCont}>
          <Typography className={classes.relatedProdsText}>
            Related Products
          </Typography>
          <Products products={data.similarProducts.slice(0, 4)} />
        </div>
      </Container>
    </>
  );
}

export default ProductDetail;
