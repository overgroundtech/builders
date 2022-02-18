import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Twitter } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1c2238",
    color: "white",
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  link: {
    color: "white",
    textDecoration: "none",
    alignItems: "center",
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  social: {
    display: "flex",
    color: "white",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <footer>
      <Box
        className={classes.root}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Box borderBottom={1}>
              {" "}
              <Typography>My Account</Typography>{" "}
            </Box>
            <Box>
              <Link className={classes.link} underline="none">
                <Typography> Create Account </Typography>{" "}
              </Link>
            </Box>
            <Box>
              <Link className={classes.link} underline="none">
                {" "}
                <Typography>Sign in</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box borderBottom={1}>
              {" "}
              <Typography>About Us</Typography>{" "}
            </Box>
            <Box>
              <Link className={classes.link} underline="none">
                {" "}
                <Typography>About us</Typography>{" "}
              </Link>
            </Box>
            <Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box borderBottom={1}>
              {" "}
              <Typography>Social Links </Typography>{" "}
            </Box>
            <Box>
              <Link className={classes.social} underline="none">
                {" "}
                <FacebookIcon className={classes.icons} /> Facebook
              </Link>
            </Box>
            <Box>
            </Box>
            <Box>
              <Link className={classes.social} underline="none">
                {" "}
                <Twitter className={classes.icons} /> Twitter
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box borderBottom={1}>
              <Typography>Talk To Us</Typography>{" "}
            </Box>
            <Box>
              <Link
                onClick={() => history.push("/contact")}
                className={classes.link}
                underline="none"
              >
                {" "}
                <Typography> Contact Us</Typography>
              </Link>
            </Box>
            <Box>
              <Link className={classes.link} underline="none">
                {" "}
                <Typography> Categories</Typography>{" "}
              </Link>
            </Box>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4px",
          }}
        >
          {" "}
          <p>&copy; {new Date().getFullYear()} buildershub.com</p>{" "}
        </div>
      </Box>
    </footer>
  );
}

export default Footer;
