import React, { useState, useContext } from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    InputBase,
    Typography,
    Menu,
    MenuItem,
    Badge,
    IconButton, Collapse,
} from '@material-ui/core';
import {
    Search,
    AddShoppingCart,
    Cancel,
    AccountCircleOutlined, ErrorOutlined
} from '@material-ui/icons';
import {useHistory, useLocation} from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
import {CartContext} from '../../Context/CartContext';
import {UserContext} from '../../Context/UserContext';
import {AlertContext} from "../../Context/alertContext";
import Alert from '@material-ui/lab/Alert';
import SearchArea from './Search';


const useStyles = makeStyles( theme => ({
    logo: {
        marginRight: theme.spacing(1),
        height: theme.spacing(10),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    badges: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            display: (show) => {
                if(!show){
                    return "flex"
                }else{
                    return "none"
                }
            }
        }  
    },
    badge: {
        marginLeft: theme.spacing(2)
    },
    search: {
        display: "flex",
        alignItems: "center",
        background: grey[100],
        width: theme.spacing(50),
        borderRadius: theme.shape.borderRadius,
        '&: hover': {
            backgroundColor: 'blue'   
        },
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            display: (show) => {
                if(show){
                    return "flex"
                }else{
                    return "none"
                }
            }
        }
    },
    searchIcon: {
        marginLeft: theme.spacing(1)
    },
    searchInput: {
        marginLeft: theme.spacing(1),
        flexGrow: "1"
    }, 
    cancel: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    showNav:{
        [theme.breakpoints.up("md")]:{
            display: "none"
        }
    },
    alert: {
        position: '-webkit-sticky sticky',
        top: '50vh',
        zIndex: 5,
        left: '4%',
        width: '100%',
        margin: '2px'
    }
}));


export default function Navbar () {
    const {cart} = useContext(CartContext);
    const { login, setLogin, setUser, setRedirect } = useContext(UserContext)
    const {open, message, setOpen, setMessage} = useContext(AlertContext);
    const [show, setShow] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const classes = useStyles(show);
    const history = useHistory();
    const location = useLocation();

    return (
        <>
            <AppBar elevation={1} color="inherit">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.logo} onClick={() => history.push('/')}>
                        <img src={'/assets/logo.jpeg'} alt={'logo'} className={classes.logo} />
                    </Typography>

                    <SearchArea className={classes.search} />

                    {show? (<IconButton onClick={() => setShow(false)} className={classes.cancel} color={"secondary"}>
                        <Cancel/>
                    </IconButton>): ''}
                    <div className={classes.badges}>
                        <IconButton onClick={() => setShow(true)}  className={classes.showNav} color={"secondary"} >
                            <Search/>
                        </IconButton>

                            <Badge badgeContent={cart? cart.count : 0} color='secondary' className={classes.badge}>
                            <AddShoppingCart onClick={() => history.push('/cart')} />
                            </Badge> 
                        
                        <IconButton className={classes.badge} onClick={(e) => setAnchorEl(e.currentTarget) } >
                            <AccountCircleOutlined/>
                        </IconButton>
                    </div>
                </Toolbar>

                <Collapse in={open} className={classes.alert}>
                    <Alert
                        variant="filled"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <Cancel fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {message}
                    </Alert>
                </Collapse>

            </AppBar>
            <Menu
                open={openMenu}
                onClose={()=> setAnchorEl(null)}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                    {
                        login && login === true?
                            <div>
                                <MenuItem onClick={()=> {
                                    alert('dashboard not ready yet');
                                    setAnchorEl(null);
                                }
                                } >Dashboard</MenuItem>
                                <MenuItem onClick={() => {
                                    localStorage.removeItem('token');
                                    setUser(null);
                                    setLogin(false);
                                    setMessage('logout was successful');
                                    setOpen(true);
                                    setAnchorEl(null);
                                    setTimeout( () => setOpen(false), 4000);
                                }
                                } >Logout</MenuItem>
                            </div>
                            :
                            <div>
                                <MenuItem onClick={() => {
                                    setRedirect(location.pathname)
                                    history.push('/login');
                                    setAnchorEl(null);
                                }} >Login</MenuItem>
                                <MenuItem onClick={() => {
                                    history.push('/register');
                                    setAnchorEl(null)
                                }} >Register</MenuItem>
                            </div>

                    }
            </Menu>
        </>
    )
}
