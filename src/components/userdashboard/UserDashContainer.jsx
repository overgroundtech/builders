import React from 'react'
import { Container } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import DrawerMenu from './DrawerMenu'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawerPaper: {
      position: 'relative',
      zIndex: 1,
      whiteSpace: 'nowrap',
      width: drawerWidth,
      height: '95%',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      background: 'white',
      color: 'black',
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
    },
    content: {
      flexGrow: 3,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }))

function UserDashContainer() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <DrawerMenu/>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          {/* <DashContentContainer/> */}
        </Container>
      </main>
    </div>
    )
}

export default UserDashContainer
