import DashBoardPage from '../views/DashBoardPage.js'
import UserPage from '../views/UserPage.js'

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

const routes = [
  {
    path: '/dashboard',
    component: DashBoardPage,
    name: 'dashboard',
    icon: Dashboard
  },
  {
    path: '/user',
    component: UserPage,
    name: 'user profile',
    icon: Person
  }  
]

export default routes