import React, {useContext} from 'react';
import auth from '../services/modAuth';

auth.login();

var initialState = {
    counter: 0,
    appTitle: process.env.REACT_APP_CLIENT_NAME + ' - ' + process.env.REACT_APP_DEPLOYMENT_NAME,
    loading:false,
    snackbar:{opened:false, color:'success', message: 'Test'}, //color: error|error|warning|info
    darkMode: localStorage.getItem('darkMode') && localStorage.getItem('darkMode') == 'true' ? true : false,
    sidebarOpened: true,
    asideOpened:false,
    user:{username:'UUUU', displayname:'פז וייסמן'}
};

const context = React.createContext({
    ...initialState
})

export default context;