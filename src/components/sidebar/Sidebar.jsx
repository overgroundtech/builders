import React, {useContext} from 'react'
import List  from '@material-ui/core/List'
import { ListItem, ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { makeStyles} from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'
import {ProductContext} from "../../Context/ProductContext";

const useStyles = makeStyles(theme=>({
    sidebarContainer:{
        marginTop:theme.spacing(1),
        boxShadow:"0 0 6px hsl(210 14% 80%)",
        height:'auto',
        [theme.breakpoints.down('sm')]:{
            display:"none"
        }
    },
    menuItems: {
      padding:theme.spacing(0.5),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "inherit"
    },
    categoryImage:{
        width:theme.spacing(6),
        height:theme.spacing(6),
        objectFit:"contain",
        overflow:"hidden",
        // marginLeft:theme.spacing(1)
    },
    active: {
        background: '#f4f4f4'
    }

}))


function Sidebar({catProds}) {
    const {products, setProducts} = useContext(ProductContext);
    const classes = useStyles()
    // TODO ADD THE ALL CATEGORY
    const handleFilter = (id) => {
        const filtered = catProds.filter(item => item.category.id === id)[0]
        setProducts(filtered.products)
    }

    return (
        <div className={classes.sidebarContainer} >
            <List>
                {catProds && catProds.map(item=>(
                    <ListItem key={item.category.id}
                    button
                    className={classes.menuItems}
                    className={products[0] && (products[0].categoryId === item.category.id? classes.active : '')}
                    onClick={() => handleFilter(item.category.id)}

                     >
                        <img className={classes.categoryImage} src={item.category.image} />
                        <ListItemText style={{marginLeft:'3px'}}>{item.category.name} </ListItemText>
                        <ListItemIcon> <ChevronRight color="secondary" /> </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Sidebar
