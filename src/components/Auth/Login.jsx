import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {Alert} from '@material-ui/lab';
import {makeStyles, Container, Paper, Typography, TextField, Button, Collapse, IconButton} from '@material-ui/core';
import {Cancel, ErrorOutlined } from "@material-ui/icons";
import {useMutation} from '@apollo/client';
import {TOKEN_AUTH} from "../../graphql/mutation";
import {UserContext} from '../../Context/UserContext';

const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(2),
        padding: '10px'
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
    text:{
        marginBottom: theme.spacing(1)
    },
    link: {
        textDecoration: "underline",
        color: "blue",
    },
    form: {
        padding: "10px",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    alert: {
        position: '-webkit-sticky sticky',
        top: '50vh',
        zIndex: 5,
        left: '4%',
        width: '100%',
        margin: '2px'
    }
}))

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [showEr, setShowEr] = useState(false);

    const {setUser, login, setLogin} = useContext(UserContext);

    const classes = useStyles();
    const history = useHistory();
    const [tokenAuth] = useMutation(TOKEN_AUTH);

    useEffect(() => {
        if(login){
            history.push('/cart')
        }
    }, [login, setLogin]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {data} = await tokenAuth({
                variables: {
                    username: username,
                    password: password
                }
            })
            if(data){
                if (data.tokenAuth.token && data.tokenAuth.user){
                    localStorage.setItem('token', data.tokenAuth.token);
                    setUser(data.tokenAuth.user);
                    setLogin(true)
                }
            }
        }catch (error) {
            setError(error.message);
            setShowEr(true);
            setTimeout(() => setShowEr(false), 10000)
        }
    }

    return(
        <Container component={Paper} elevation={2}>
            <Typography className={classes.title} variant={"h5"} >Login</Typography>
            <form className={classes.form} onSubmit={handleSubmit} >
                <TextField  color={"secondary"} className={classes.input} onChange={(e) => {setUsername(e.target.value)}} variant={"outlined"} label="username" required />
                <TextField  color={"secondary"} className={classes.input} onChange={(e) => {setPassword(e.target.value)}} variant={"outlined"} label="password" type={"password"} required />
                <Button className={classes.btn} type="submit" variant="outlined" color={"secondary"}>Login</Button>
                <Collapse in={showEr} className={classes.alert}>
                    <Alert
                        variant="filled"
                        icon={<ErrorOutlined />}
                        color={"error"}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setShowEr(false);
                                }}
                            >
                                <Cancel fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {error}
                    </Alert>
                </Collapse>
                <Typography className={classes.text} variant={"body1"}>Already have an account? <a className={classes.link} onClick={() => history.push('/login')}>login</a></Typography>
            </form>

        </Container>
    )
}