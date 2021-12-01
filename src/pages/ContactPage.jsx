import React from "react";
import Card from "@material-ui/core/Card";
import { Button, CardContent, Grid, TextField } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    marginTop: "10px",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
  },
  telephone: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginTop: "10px",
  },
  contactsCont: {
    display: "flex",
    width: "80%",
  },
}));

function ContactPage() {
  const classes = useStyles();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // console.log(firstName, lastName, email, message)

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstname(value);
    } else if (name === "lastName") {
      setLastname(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, message);
    alert(`${firstName} ${lastName} has sent you a message: ${message}`);
  };
  return (
    <Container className={classes.root}>
      <Typography variant="h6" gutterBottom align="center">
        {" "}
        Contact Us here
      </Typography>
      <Card style={{ backgroundColor: "transparent", width: "80%" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  placeholder="Enter firstname"
                  variant="standard"
                  fullWidth
                  required
                  value={firstName}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter last"
                  variant="standard"
                  fullWidth
                  required
                  value={lastName}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter Email"
                  variant="standard"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => handleChange(e)}
                  autoComplete="none"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="phone"
                  type="tel"
                  placeholder="Enter Phone number"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  label="message"
                  type="text"
                  placeholder="Enter message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  maxRows={3}
                  value={message}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="secondary"
                >
                  {" "}
                  submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Card
        style={{
          backgroundColor: "transparent",
          width: "70%",
          marginTop: "10px",
        }}
      >
        <CardContent className={classes.contactsCont}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className={classes.telephone}>
              <Typography> Telephone</Typography>
              <CallIcon style={{ fontSize: "20px" }} />
              <Typography>
                {/* <Link>071500000</Link> */}
                <Link href="tel:071500000">0715000001</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.telephone}>
              <Typography color="inherit"> Email</Typography>
              {/* <EmailIcon tyle={{ fontSize: "20px" }} /> */}
              <Typography>
                <Link>buildershub@gmail.com</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.telephone}>
              <Typography color="inherit">Open</Typography>
              {/* <EmailIcon tyle={{ fontSize: "20px" }} /> */}
              <Typography>
                <Link>Mon-Fri: 9am-5pm</Link>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ContactPage;
