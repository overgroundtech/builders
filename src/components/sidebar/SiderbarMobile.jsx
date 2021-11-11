import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Card,CardMedia,CardContent, CardActionArea} from '@material-ui/core'

const useStyles = makeStyles (theme=>({
    sidebarContainer:{
        boxShadow:theme.shadows[5],
        height:'auto',
        [theme.breakpoints.up('md')]:{
            display:'none',
        },
    },
    root:{
        maxWidth:'50',
        spacing:theme.spacing(2),
        margin:theme.spacing(.3),
        backgroundColor:'white',
    },
    media:{
    position:'relative',
    width:'100%',
    height:'100%',
    left:0,
    top:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    overflow:'hidden',
    objectFit:'cover',
    },

    mediaImage:{
        height:'100%',
        width:'100%',
        maxHeight:'75px'
    },
    textStyle:{
        textAlign:'center',
        fontSize:'14px',
    }

   
}))


function SidebarMobile({catProds}) {

    const classes = useStyles()

    return (
        <Grid container className={classes.sidebarContainer} >
            {catProds && catProds.map(item=>(
                <Grid item  xs={4}  key={item.category.id}>
                    <Card elevation={3} className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                             className={classes.media}>
                                <img src={item.category.image} className={classes.mediaImage} alt={item.id + "image"} />
                             </CardMedia>                   
                            <CardContent>
                                <Typography gutterBottom variant="body2" component="p" className={classes.textStyle}>
                                    {item.category.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )
            )}
            
        </Grid>
    )
}

export default SidebarMobile
