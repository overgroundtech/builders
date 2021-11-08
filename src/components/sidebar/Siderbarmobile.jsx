import React from 'react'
import { Grid } from '@material-ui/core'
import {  Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {SubjectOutlined,AddCircleOutlined} from '@material-ui/icons'
import { Card,CardMedia,CardContent, CardActionArea} from '@material-ui/core'

const useSyles = makeStyles (theme=>({
    sidebarContainer:{
        marginTop:theme.spacing(3),
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
   
}))

const menuItems = [
    {
        text:"Taps",
        id:1,
        icon:<SubjectOutlined color ='secondary'/>
    },
    {
        text:"Basins",
        id:2,
        icon:<AddCircleOutlined color ='secondary'/>
        
    },
    {
        text:"Toilets",
        id:3,
        icon:<AddCircleOutlined color ='secondary'/>   
    },
    {
        text:"Kitchenware",
        id:4,
        icon:<SubjectOutlined color ='secondary'/>
        
    },
    {
        text:"Bathrooms",
        id:5,
        icon:<SubjectOutlined color ='secondary'/> 
    },
    {
        text:"Bathrooms",
        id:6,
        icon:<SubjectOutlined color ='secondary'/>
        
    }
]

function Sidebarmobile() {

    const classes = useSyles()

    return (
        <Grid container className={classes.sidebarContainer} >
            {menuItems.map(item=>(
                <Grid item  xs={4}  key={item.id}>
                    <Card elevation={3}>
            {item.text}
                    </Card>
                </Grid>
            )
            )}
            
        </Grid>
    )
}

export default Sidebarmobile
