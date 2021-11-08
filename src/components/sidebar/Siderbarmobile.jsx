import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {SubjectOutlined,AddCircleOutlined} from '@material-ui/icons'
import { Card,CardMedia,CardContent, CardActionArea} from '@material-ui/core'

const useSyles = makeStyles (theme=>({
    sidebarContainer:{
        boxShadow:theme.shadows[5],
        height:'auto',
        [theme.breakpoints.up('sm')]:{
            backgroundColor:'red',
            display:'none',
        },
    },
    listitems:{
        [theme.breakpoints.down('sm')]:{
            display:'flex',
        }
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

    mediaimage:{
        height:'100%',
        width:'100%',
        maxHeight:'75px'
    },
    textstyle:{
        textAlign:'center',
        fontSize:'14px',
    }

   
}))

const menuItems = [
    {
        text:"Taps",
        id:1,
        icon:<SubjectOutlined color ='secondary'/>,
        image:'https://media.istockphoto.com/photos/bathroom-faucet-picture-id182691828?k=20&m=182691828&s=612x612&w=0&h=u2qwi7eGOk37hUjHT7MXR3tnePRewb2n4tWHkhkcV-Y='
    },
    {
        text:"Basins",
        id:2,
        icon:<AddCircleOutlined color ='secondary'/>,
        image:"https://media.istockphoto.com/photos/farmhouse-bathroom-with-shiplap-wall-3d-render-picture-id1211003958?k=20&m=1211003958&s=612x612&w=0&h=sI5_Mw4RCIlVAa_ilY_7dortrSsxyl7SDyqKwlrl7g4="
        
    },
    {
        text:"Toilets",
        id:3,
        icon:<AddCircleOutlined color ='secondary'/>,
        image:'https://media.istockphoto.com/photos/white-toilet-in-home-picture-id531424722?b=1&k=20&m=531424722&s=170667a&w=0&h=KpKm22wHy1V2rcQFzIDEU-vMRGS6sdhyfUBO8fgbepY='          
    },
    {
        text:"Kitchen",
        id:4,
        icon:<SubjectOutlined color ='secondary'/>,
        image:"https://media.istockphoto.com/photos/modern-kitchen-interior-stock-photo-picture-id1287452380?b=1&k=20&m=1287452380&s=170667a&w=0&h=Jhvt9B2KUu0WFcG-ljROqM3hwli9C_ZWRAwnR09MBAQ="
        
    },
    {
        text:"Bathrooms",
        id:5,
        icon:<SubjectOutlined color ='secondary'/>,
        image:"https://media.istockphoto.com/photos/master-bathroom-in-new-luxury-home-picture-id542685180?k=20&m=542685180&s=612x612&w=0&h=y93PupaGY4dhK9t4hI_2nHul5uMSDsS9F_fYARaIuF4="
    },

    {
        text:"Bathrooms",
        id:6,
        icon:<SubjectOutlined color ='secondary'/>,
        image:"https://media.istockphoto.com/photos/white-toilet-in-home-picture-id531424722?b=1&k=20&m=531424722&s=170667a&w=0&h=KpKm22wHy1V2rcQFzIDEU-vMRGS6sdhyfUBO8fgbepY="        
    }
]

function Sidebarmobile() {

    const classes = useSyles()

    return (
        <Grid container className={classes.sidebarContainer} >
            {menuItems.map(item=>(
                <Grid item  xs={4}  key={item.id}>
                    <Card elevation={3} className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                             className={classes.media}> 
                                <img src={item.image} alt="" className={classes.mediaimage}/>
                             </CardMedia>                   
                            <CardContent>
                                <Typography gutterBottom variant="body-" component="h2" className={classes.textstyle}>
                                    {item.text}
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

export default Sidebarmobile
