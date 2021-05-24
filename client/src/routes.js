import React from 'react';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EventIcon from '@material-ui/icons/Event';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import CakeIcon from '@material-ui/icons/Cake';

const Demo = React.lazy(() => import('./pages/Demo'));
const Dashboard = React.lazy(() => import('./pages/editor/Dashboard'));
const Events = React.lazy(() => import('./pages/editor/events/Table'));
const EventEdit = React.lazy(() => import('./pages/editor/events/Edit'));
const Guests = React.lazy(() => import('./pages/editor/guests/Table'));
const GuestEdit = React.lazy(() => import('./pages/editor/guests/Edit'));
const Users = React.lazy(() => import('./pages/editor/users/Table'));
const UserEdit = React.lazy(() => import('./pages/editor/users/Edit'));
const Register = React.lazy(() => import('./pages/public/Register'));
const Error = React.lazy(() => import('./pages/public/Error'));

// https://github.com/ReactTraining/react-router/tree/master/packages/rreact-router-config

const isEditor = true;
const isAdmin = true;

const routes = [
  { path: '/register/:id', exact: true, name: 'Home', onMainMenu: false, text: 'בית', icon: <InboxIcon />, dividerBefore:false, render:(props) => <Register {...props} />  },
  { path: '/dashboard', exact: true, name: 'Dashboard', onMainMenu: true, text: 'דוח', icon: <DashboardIcon />, dividerBefore:false, render:(props) => isEditor ? <Dashboard {...props} /> : <Error {...props} /> },
  { path: '/demo', exact: true, name: 'Demo', onMainMenu: true, text: 'דמו של פקדים', icon: <CakeIcon />, dividerBefore:false, render:(props) => isEditor ? <Demo {...props} /> : <Error {...props} /> },
  { path: '/events', exact: true, name: 'Events', onMainMenu: true, text: 'אירועים', icon: <EventIcon />, dividerBefore:true, render:(props) => isEditor ? <Events {...props} /> : <Error {...props} />},
  { path: '/event/:id', exact: true, name: 'EventEdit', onMainMenu: true, text: 'עריכת אירוע', icon: <EmojiEventsIcon />, dividerBefore:false, render:(props) => isEditor ? <EventEdit {...props} /> : <Error {...props} /> },
  { path: '/guests', exact: true, name: 'Guests', onMainMenu: true, text: 'מוזמנים', icon: <PeopleIcon />, dividerBefore:true, render:(props) => isEditor ? <Guests {...props} /> : <Error {...props} /> },
  { path: '/guest/:id', exact: true, name: 'GuestEdit', onMainMenu: false, text: 'עריכת מוזמן', icon: <PeopleIcon />, dividerBefore:false, render:(props) => isEditor ? <GuestEdit {...props} /> : <Error {...props} /> },
  { path: '/users', exact: true, name: 'Users', onMainMenu: true, text: 'משתמשים', icon: <PersonAddIcon />, dividerBefore:true, render:(props) => isEditor ? <Users {...props} /> : <Error {...props} /> },
  { path: '/user/:id', exact: true, name: 'UserEdit', onMainMenu: false, text: 'עריכת משתמש', icon: <PersonAddIcon />, dividerBefore:false, render:(props) => isEditor ? <UserEdit {...props} /> : <Error {...props} /> },
  { path: '/error', name: 'Error', onMainMenu: false, text: 'שגיאה', dividerBefore:false, render:(props) => <Error {...props} /> }
];

export default routes;