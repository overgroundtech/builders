import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Box } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Twitter } from '@material-ui/icons'

const useStyles = makeStyles (theme=>({
    root: {
        backgroundColor:'#1c2238',
        color: 'white',
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        verticlHeight: '100px',
    },
    Link: {
        color: 'white',
        textDecoration: 'none',       
    },
}))

function Footer() {
    const classes = useStyles()
    return (
        <footer>
            <Box className={classes.root } px={{xs:3, sm:10}} py={{xs:5, sm:10}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1}> <Typography>My Account</Typography> </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'><Typography>Sign in </Typography> </Link>
                        </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'> <Typography>Create Account</Typography></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1}> <Typography>About Us</Typography> </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'> <Typography>About us</Typography> </Link>
                        </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'> <Typography>Categories </Typography></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1}> <Typography>Social Links </Typography> </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'> <FacebookIcon/> </Link>
                        </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'> <YouTubeIcon/> </Link>
                        </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'> <Twitter/> </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box borderBottom={1}><Typography>Contact Us</Typography> </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'> <Typography>About us </Typography></Link>
                        </Box>
                        <Box>
                            <Link className={classes.Link} underline='none'> <Typography> Categories</Typography> </Link>
                        </Box>
                    </Grid>
                </Grid>
                <div style={{display:'flex', justifyContent:'center', marginTop:'4px'}} > <p>&copy; {new Date().getFullYear()} buildershub.com</p>  </div>

            </Box>
        </footer>
    )
}

export default Footer
