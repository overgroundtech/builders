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
    categoryImage:{
        width:theme.spacing(6),
        height:theme.spacing(6),
        objectFit:"contain",
        overflow:"hidden",
        // marginLeft:theme.spacing(1)
    }

}))

const menuItems = [
    {
        text:"Taps",
        id:1,
        image:'https://media.istockphoto.com/photos/bathroom-faucet-picture-id182691828?k=20&m=182691828&s=612x612&w=0&h=u2qwi7eGOk37hUjHT7MXR3tnePRewb2n4tWHkhkcV-Y='
    },
    {
        text:"Basins",
        id:2,
        image:'https://media.istockphoto.com/photos/bathroom-faucet-picture-id182691828?k=20&m=182691828&s=612x612&w=0&h=u2qwi7eGOk37hUjHT7MXR3tnePRewb2n4tWHkhkcV-Y='
    },
    {
        text:"Toilets",
        id:3,
        image:'https://media.istockphoto.com/photos/bathroom-faucet-picture-id182691828?k=20&m=182691828&s=612x612&w=0&h=u2qwi7eGOk37hUjHT7MXR3tnePRewb2n4tWHkhkcV-Y='
    },
    {
        text:"Kitchenware",
        id:4,
        image:'https://media.istockphoto.com/photos/bathroom-faucet-picture-id182691828?k=20&m=182691828&s=612x612&w=0&h=u2qwi7eGOk37hUjHT7MXR3tnePRewb2n4tWHkhkcV-Y='
    },
    {
        text:"Bathrooms",
        id:5,
        image:'https://media.istockphoto.com/photos/bathroom-faucet-picture-id182691828?k=20&m=182691828&s=612x612&w=0&h=u2qwi7eGOk37hUjHT7MXR3tnePRewb2n4tWHkhkcV-Y='
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
                  <img className={classes.categoryImage} src={item.image} />
                        <ListItemText style={{marginLeft:'3px'}}>{item.text}</ListItemText>
                        <ListItemIcon> <ChevronRight color="secondary" /> </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Sidebar
