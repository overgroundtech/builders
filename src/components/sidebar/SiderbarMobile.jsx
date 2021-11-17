import React, {useContext} from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Card,CardMedia,CardContent, CardActionArea} from '@material-ui/core'
import {ProductContext} from "../../Context/ProductContext";

const useStyles = makeStyles (theme=>({
    sidebarContainer:{
        marginTop: theme.spacing(2),
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
        maxHeight: theme.spacing(5),
        width: 'auto',
    },
    textStyle:{
        textAlign:'center',
        fontSize:'14px',
    },
    active: {
        background: '#f4f4f4'
    }
}))


function SidebarMobile({catProds}) {
    const {products, setProducts} = useContext(ProductContext);
    const classes = useStyles()

    const handleFilter = (id) => {
        const filtered = catProds.filter(item => item.category.id === id)[0]
        setProducts(filtered.products)
    }

    return (
        <Grid container spacing={2} className={classes.sidebarContainer} >
            {catProds && catProds.map(item=>(
                <Grid item  xs={3}  key={item.category.id}>
                    <Card elevation={3} className={classes.root} 
                            className={products[0] && (products[0].categoryId === item.category.id? classes.active : '')}
                            onClick={() => handleFilter(item.category.id)}
                    >
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
