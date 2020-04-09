import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute.js'
import PublicRoute from './PublicRoute.js'
import LoginPage from '../views/LoginPage.js'
import NotFoundPage from '../views/NotFoundPage.js'
import routes from './routes.js'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path='/' component={LoginPage} exact />
      {routes.map((route, index) =>
        <PrivateRoute 
          key={index}
          path={route.path}
          component={route.component} 
        />
      )}
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter