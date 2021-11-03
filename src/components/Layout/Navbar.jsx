import React, { useState } from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    InputBase,
    Typography,
    Avatar,
    Badge,
    IconButton,
    alpha
} from '@material-ui/core';
import {
     Search,
     AddShoppingCart,
     Cancel
} from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles( theme => ({
    logo: {
        marginRight: theme.spacing(1)
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
        background: grey[300],
        width: theme.spacing(50),
        borderRadius: theme.shape.borderRadius,
        '&: hover': {
            backgroundColor: 'blue'   
        },
        [theme.breakpoints.down("md")]: {
            display: (show) => {
                if(show){
                    return "flex"
                }else{
                    return "none"
                }
            }
        }
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
    const [show, setShow] = useState(false)
    const classes = useStyles(show);

    return (
        <>
            <AppBar color="inherit">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" component="p" className={classes.logo}>
                        logo
                    </Typography>
                    <div className={classes.search}>
                        <Search />
                        <InputBase placeholder="Search..."  className={classes.searchInput} />
                        <Cancel className={classes.cancel} onClick={() => {setShow(false)}} />
                    </div>
                    <div className={classes.badges}>
                        <IconButton onClick={() => setShow(true)} >
                            <Search className={classes.cancel} />
                        </IconButton>
                        <Badge badgeContent={2} color='secondary' className={classes.badge}>
                            <AddShoppingCart />
                        </Badge> 
                        <Avatar className={classes.badge}> A</Avatar>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}