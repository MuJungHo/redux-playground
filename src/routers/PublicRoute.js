import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <div>
    <Route
      {...rest}
      render={ (props) =>
        isAuthenticated ? <Redirect to='/dashboard' /> : <Component {...props} />
      }
    />
  </div>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.userToken
})

export default connect(mapStateToProps)(PublicRoute)