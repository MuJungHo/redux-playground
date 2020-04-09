import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar.js'
import routes from './routes'
import { makeStyles } from "@material-ui/core/styles";

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex'
    }
  }))
  
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Sidebar 
        routes={routes} 
        {...rest}
      />
      <Route
        {...rest}
        render={ (props) =>
          isAuthenticated ? <Component {...props}/> : <Redirect to='/' />
        }
      />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.userToken
})

export default connect(mapStateToProps)(PrivateRoute)