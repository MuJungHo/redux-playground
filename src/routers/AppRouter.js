
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute.js'
import PublicRoute from './PublicRoute.js'
import LoginPage from '../views/LoginPage.js'
import DashBoardPage from '../views/DashBoardPage.js'
import NotFoundPage from '../views/NotFoundPage.js'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path='/' component={LoginPage} exact />
      <PrivateRoute path='/dashboard' component={DashBoardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter