import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/styles";
import DrawerMenu from "./DrawerMenu";
import { Select } from "@material-ui/core";
import {
  TextField,
  Divider,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    zIndex: 1,
    whiteSpace: "nowrap",
    width: drawerWidth,
    height: "95%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: "white",
    color: "black",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
  },
  content: {
    flexGrow: 3,
    height: "100vh",
    overflow: "auto",
    //   backgroundColor: 'red',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Account() {
  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    country: "Kenya",
  });

  const states = [
    {
      value: "Nyeri",
      label: "Nyeri",
    },
    {
      value: "Nairobi",
      label: "Nairobi",
    },
    {
      value: "Mombasa",
      label: "Mombasa",
    },
  ];

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };
//   console.log(option.value)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <Typography>I'm the Sidebar</Typography> */}
        <DrawerMenu />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.container}>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"

            //   {...props}
          >
            <Card elevation={4} >
              <CardHeader subheader="User Details" title="Profile" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="First name"
                      name="firstName"
                      onChange={handleChange}
                      required
                      value={values.firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Last name"
                      name="lastName"
                      onChange={handleChange}
                      required
                      value={values.lastName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      required
                      value={values.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      onChange={handleChange}
                      type="number"
                      value={values.phone}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Country"
                      name="country"
                      onChange={handleChange}
                      required
                      value={values.country}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <select
                      // fullWidth
                      label="Select State"
                      name="state"
                      onChange={handleChange}
                      // required
                      // select
                      // SelectProps={{ native: true }}
                      value={values.state}
                      variant="outlined"
                    >
                      {states.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                }}
              >
                <Button color="primary" variant="contained" type="submit">
                  Save details
                </Button>
              </Box>
            </Card>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Account;
