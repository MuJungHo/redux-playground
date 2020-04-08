import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header.js'

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <div>
    <Header />
    <Route
      {...rest}
      render={ (props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  </div>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.userToken
})

export default connect(mapStateToProps)(PrivateRoute)