import React from "react";
import DashBoardPage from '../views/DashBoardPage.js'
import UserPage from '../views/UserPage.js'
import SettingPage from '../views/SettingPage.js'
import ProjectPage from '../views/ProjectPage.js'

import Dashboard from "@material-ui/icons/Dashboard"
import Person from "@material-ui/icons/Person"
import Setting from "@material-ui/icons/Settings"
import Project from "@material-ui/icons/Code"

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
    path: '/project',
    component: ProjectPage,
    name: <FormattedMessage id="project"/>,
    icon: Project
  },
  {
    path: '/setting',
    component: SettingPage,
    name: <FormattedMessage id="settings"/>,
    icon: Setting
  }
]

export default routes