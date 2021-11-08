import React from 'react'
import List  from '@material-ui/core/List'
import { ListItem, ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { makeStyles} from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'


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

}))

const menuItems = [
    {
        text:"Taps",
        id:1,
    },
    {
        text:"Basins",
        id:2,
    },
    {
        text:"Toilets",
        id:3,
    },
    {
        text:"Kitchenware",
        id:4,
    },
    {
        text:"Bathrooms",
        id:5,
    }
]


function Sidebar() {
    const classes = useStyles()

    return (
        <div className={classes.sidebarContainer} >
            <List>
                {menuItems.map(item=>(
                    <ListItem key={item.id}
                    button
                    className={classes.menuItems}
                     >
                        <ListItemText>{item.text}</ListItemText>
                        <ListItemIcon> <ChevronRight color="secondary" /> </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Sidebar
