import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar.js'
import Navbar from '../components/Navbar.js'
import routes from './routes'
import { makeStyles } from "@material-ui/core/styles";

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  const useStyles = makeStyles(theme => ({
    flex: {
      display: 'flex'
    },
    mainPanel: {
      position: 'relative',
      flexGrow: 1,
      height: '100%',
      backgroundColor: 'rgba(0, 119, 214, 0.15)'
    },
    content: {
      padding: '10px',
      height: 'calc(100vh - 64px)',
      boxSizing: 'border-box'
    }
  }))
  
  const classes = useStyles()

  return (
    <div className={classes.flex}>
      <Sidebar 
        routes={routes}
        {...rest}
      />
      <div className={classes.mainPanel}>
        <Navbar path={rest.path}/>
        <div className={classes.content}>
          <Route
            {...rest}
            render={ (props) =>
              isAuthenticated ? <Component {...props}/> : <Redirect to='/' />
            }
          />
        </div>
      </div>
    </div>
)}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.userToken
})

export default connect(mapStateToProps)(PrivateRoute)