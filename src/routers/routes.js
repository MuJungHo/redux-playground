import React from "react";
import DashBoardPage from '../views/DashBoardPage.js'
import UserPage from '../views/UserPage.js'

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import { FormattedMessage } from 'react-intl';

const routes = [
  {
    path: '/dashboard',
    component: DashBoardPage,
    name: <FormattedMessage id="dashboard"/>,
    icon: Dashboard
  },
  {
    path: '/user',
    component: UserPage,
    name: <FormattedMessage id="userProfile"/>,
    icon: Person
  }  
]

export default routes