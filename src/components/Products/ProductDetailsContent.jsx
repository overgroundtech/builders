import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { PRODUCT } from "../../graphql/query";
import { useQuery } from "@apollo/client";
import Products from "./Products";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: "10px",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px #e0e0e0",
    height: "auto",
    fontSize: "1.0rem",
    fontFamily: "Roboto",
  },
  chevron: {
    color: "green",
    [theme.breakpoints.up("sm")]: {
      display: "auto",
    },
  },
  descriptionItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alighnItems: "center",
    padding: "10px",
  },
}));

function ProductDetailsContent(props) {
  const classes = useStyles();
  const [display, setDisplay] = useState(true);
  const [hidePayment, setHidePayment] = useState(true);

  const handleDisplayClick = () => {
    setDisplay(true);
  };

  const togglePayment = () => {
    setHidePayment(false);
  };

  const PaymentDetails = () => {
    return (
      <List className={classes.descriptionItem}>
        <ListItem>Mpesa Mobile Money Payment</ListItem>
        <ListItem>Bank Transfer</ListItem>
        <ListItem> Visa</ListItem>
      </List>
    );
  };

  return (
    <Container>
      <Grid container spacing={3} className={classes.titleContainer}>
        <Grid item xs={12} sm={4} className={classes.descriptionItem}>
          <Typography variant="h6"> Description </Typography>
          <Typography>
            {" "}
            <KeyboardArrowDownIcon
              className={classes.chevron}
              onClick={handleDisplayClick}
            />
            {/* Description{" "} */}
          </Typography>
          {display ? props.value : null}
        </Grid>

        <Grid item xs={12} sm={4} className={classes.descriptionItem}>
          <Typography>
            {" "}
            <KeyboardArrowDownIcon onClick={togglePayment} /> Payment Options
          </Typography>
          {!hidePayment && <PaymentDetails />}
          {/* <List>
              <ListItem>Mpesa Mobile Money Payment</ListItem>
                <ListItem>Bank Transfer</ListItem>
                <ListItem> Visa</ListItem>
          </List> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetailsContent;
