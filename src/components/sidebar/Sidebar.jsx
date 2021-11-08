import React from 'react'
import List  from '@material-ui/core/List'
import { ListItem, ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { makeStyles} from '@material-ui/core'
import { SubjectOutlined,AddCircleOutlined } from '@material-ui/icons'


// const sidebarWidth = 240


const useStyles = makeStyles(theme=>({
    sidebarContainer:{
        marginTop:theme.spacing(3),
        // display:'flex',
        boxShadow:"0 0 6px hsl(210 14% 80%)",
        height:'auto',
        [theme.breakpoints.down('xs')]:{
            display:"none"
        }
    },
    menuitems: {
      padding:theme.spacing(0.5),
      marginLeft:'10px',
      
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
        
    }
]


function Sidebar() {
    const classes = useStyles()

    return (
        <div className={classes.sidebarContainer} >
            <List className = {classes.listitems}>
                {menuItems.map(item=>(
                    <ListItem key={item.id}
                    button
                    className={classes.menuitems}
                     >
                         <ListItemIcon> {item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </ListItem>  
                ))}
            </List>
        </div>
    )
}

export default Sidebar
