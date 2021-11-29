import React, { useState } from "react";
import { useHistory } from "react-router";
import { createStyles, makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BarChartIcon from "@material-ui/icons/BarChart";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MessageIcon from '@material-ui/icons/Message';

const drawerWidth = 240; // width of the drawer

const useStyles = makeStyles((theme) =>
  createStyles({
    drawerMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
      '&:hover': {
        backgroundColor: '#f5f5f5',
      }
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);

function DrawerMenu() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const menuItems = [
      {
        text: "Dashboard",
        icon: <DashboardIcon />,
        // path: "/dashboard",
      },
        {
        text: "Orders",
        icon: <ShoppingCartIcon />,
        path: "/orders",
        },
        {
        text: "Account",
        icon: <AccountCircleIcon />,
        path: "/account",
        },
        {
        text: "Messages",
        icon: <MessageIcon />,
        path: "/messages",
        },
        // {
        // text: "other",
        // icon: <LibraryBooksIcon />,
        // path: "/nested-pages",
        // }
  ]

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List component="nav" className={classes.drawerMenu} disablePadding>
        {menuItems.map((menuItem, index) => (
            <ListItem button key={index} className={classes.menuItem} onClick={()=>history.push(menuItem.path)} >
                <ListItemIcon className={classes.menuItemIcon}> {menuItem.icon} </ListItemIcon>
                <ListItemText primary={menuItem.text} />
            </ListItem>
        ))}

<ListItem button onClick={handleClick} className={classes.menuItem}  >
<ListItemIcon className={classes.menuItemIcon}>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary='other' />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem> 

      <Collapse in={open} timeout="auto" unmountOnExit  >
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Nested Page 1" />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Nested Page 2" />
          </ListItem>
        </List>
      </Collapse>


      {/* <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem> */}

      {/* <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>

      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>

      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Nested Pages" />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem> */}
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Nested Page 1" />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Nested Page 2" />
          </ListItem>
        </List>
      </Collapse> */}
      

    </List>
  );
}

export default DrawerMenu;
