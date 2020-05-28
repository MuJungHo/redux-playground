import React from "react";
import DashBoardPage from '../views/DashBoardPage.js'
import UserPage from '../views/UserPage.js'
import SettingPage from '../views/SettingPage.js'
import MediaPage from '../views/MediaPage.js'

import Dashboard from "@material-ui/icons/Dashboard"
import Person from "@material-ui/icons/Person"
import Setting from "@material-ui/icons/Settings"
import Media from "@material-ui/icons/PermMedia"

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
  },
  {
    path: '/setting',
    component: SettingPage,
    name: <FormattedMessage id="settings"/>,
    icon: Setting
  },
  {
    path: '/media',
    component: MediaPage,
    name: <FormattedMessage id="media"/>,
    icon: Media
  }
]

export default routes