import React from "react";
import { connect } from 'react-redux'
import clsx from 'clsx';
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const Sidebar = (props) => {

  const { routes, state } = props

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1
  }

  const drawerWidth = 240

  const useStyles = makeStyles(theme => ({
    menuButton: {
      marginLeft: 36,
    },
    textAlignCenter: {
      textAlign: 'center'
    },
    textAlignRight: {
      textAlign: 'right'
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
      backgroundColor: state.theme.menuBackgroundColor
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: '86px',
      backgroundColor: state.theme.menuBackgroundColor
    },
    listItem: {
      margin: '10px 15px 0',
      '& svg': {
        fill: 'rgba(255, 255, 255, 0.8)'
      },
      width: 'auto'
    },
    listItemActive: {
      backgroundColor: '#00acc1',
      '& svg': {
        fill: '#fff'
      }
    },
    navLink: {
      textDecoration: 'none',
      color: 'rgba(255, 255, 255, 0.8)'
    },
    navLinkActive: {
      color: '#fff'
    },
    icon: {
      fill: 'rgba(255, 255, 255, 0.8)'
    }
  }))

  const classes = useStyles()

  var links = (
    <List>
      {routes.map((prop, key) => {
        return (
          <NavLink
            to={prop.path}
            key={key}
            className={clsx(classes.navLink, {
              [classes.navLinkActive]: activeRoute(prop.path)
            })}
          >
            <ListItem 
              button
              className={clsx(classes.listItem, {
                [classes.listItemActive]: activeRoute(prop.path)
              })}
            >
              <prop.icon />
              <ListItemText primary={prop.name} className={classes.menuButton}/>
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  )

  var openButton = (
    <IconButton onClick={handleDrawerOpen}>
      <MenuIcon className={classes.icon}/>
    </IconButton>
  )

  var closeButton = (
    <IconButton onClick={handleDrawerClose}>
      <ChevronLeftIcon className={classes.icon}/>
    </IconButton>
  )

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        className = {clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })
        }}
      >
        <div className={clsx(classes.textAlignCenter, {
          [classes.textAlignRight]: open,
        })}>
          {open ? closeButton : openButton}
          {links}
        </div>
      </Drawer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps)(Sidebar)