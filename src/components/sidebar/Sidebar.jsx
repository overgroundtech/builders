import React from 'react'
import List  from '@material-ui/core/List'
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { ListItemIcon } from '@material-ui/core'
import { makeStyles} from '@material-ui/core'
import { SubjectOutlined,AddCircleOutlined } from '@material-ui/icons'


// const sidebarWidth = 240

const useStyles = makeStyles(theme=>({
    sidebarContainer:{
        marginTop:theme.spacing(1),
        display:'flex',
        boxShadow:"0 0 6px hsl(210 14% 80%)",
        height:'100%'
    },
    menuitems: {
      padding:theme.spacing(0.5),
      marginLeft:'10px'
    },
    // menuitems: {
    //     '&:hover': {
    //         backgroundColor: '#ffffff',
    //         boxShadow: 'none',
    //       },
    //       '&:active': {
    //         boxShadow: 'none',
    //         backgroundColor: 'white',
    //       },
    // }
}))

const menuItems = [
    {
        text:"Taps",
        id:1,
        icon:<SubjectOutlined color='secondary'/>,
        
    },
    {
        text:"Basins",
        id:2,
        icon:<AddCircleOutlined color='secondary'/>,
        
    },
    {
        text:"Basins",
        id:3,
        icon:<AddCircleOutlined color='secondary'/>,
        
    },
    {
        text:"Basins",
        id:4,
        icon:<AddCircleOutlined color='secondary'/>,
        
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
                    className={classes.menuitems}
                     >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </ListItem>  
                ))}
            </List>
        </div>
    )
}

export default Sidebar
