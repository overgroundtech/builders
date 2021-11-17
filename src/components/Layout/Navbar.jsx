import React, { useState, useContext } from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    InputBase,
    Typography,
    Avatar,
    Badge,
    IconButton,
} from '@material-ui/core';
import {
     Search,
     AddShoppingCart,
     Cancel
} from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
import {CartContext} from '../../Context/CartContext';


const useStyles = makeStyles( theme => ({
    logo: {
        marginRight: theme.spacing(1),
        height: 'inherit',
        maxWidth: 80
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
    }
}));

export default function Navbar () {
    const {cart} = useContext(CartContext);
    const [show, setShow] = useState(false);
    const classes = useStyles(show);
    const history = useHistory();
    return (
        <>
            <AppBar elevation={1} color="inherit">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.logo} onClick={() => history.push('/')}>
                        <img src={'/logo.jpeg'} alt={'logo'} className={classes.logo} />
                    </Typography>
                    <div className={classes.search}>
                        <Search className={classes.searchIcon} />
                        <InputBase placeholder="Search..."  className={classes.searchInput} />
                        <Cancel className={classes.cancel} onClick={() => {setShow(false)}} />
                    </div>
                    <div className={classes.badges}>
                        <IconButton onClick={() => setShow(true)}  className={classes.cancel}  >
                            <Search/>
                        </IconButton>
                        
                            <Badge badgeContent={cart? cart.count : 0} color='secondary' className={classes.badge}>
                            <AddShoppingCart onClick={() => history.push('/cart')} />
                            </Badge> 
                        
                        <Avatar className={classes.badge} > A</Avatar>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}