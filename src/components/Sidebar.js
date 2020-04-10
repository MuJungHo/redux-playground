import React from "react";
import PropTypes from "prop-types";
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

export default function Sidebar (props) {

  const { routes } = props

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
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
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden'
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1
    }
  }))

  const classes = useStyles()

  var links = (
    <List>
      {routes.map((prop, key) => {
        return (
          <NavLink
            to={prop.path}
            activeClassName="active"
            key={key}
          >
            <ListItem button>
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
      <MenuIcon />
    </IconButton>
  )

  var closeButton = (
    <IconButton onClick={handleDrawerClose}>
      <ChevronLeftIcon />
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

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
}
