import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Paper, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    input: {
        width: '100%',
        marginBottom: theme.spacing(1)
    },
    title: {
        textAlign: 'center',
        padding: theme.spacing(1),
        margin: 'auto'
    },
    btn: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    form: {
    }
}))

export default function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    const classes = useStyles();
    const history = useHistory();
    return(
        <Container component={Paper} elevation={2}>
            <Typography className={classes.title} variant={"h5"} >Register</Typography>
            <form>
                <TextField className={classes.input} variant={"outlined"} label="username" required />
                <TextField className={classes.input} variant={"outlined"} label="email" type={"email"} required />
                <TextField className={classes.input} variant={"outlined"} label="password" type={"password"} required />
                <TextField className={classes.input} variant={"outlined"} label="confirm password" type={"password"} required />
                <Button className={classes.btn} type="submit" variant="outlined" color={"secondary"}>Register</Button>
            </form>
        </Container>
    )
}