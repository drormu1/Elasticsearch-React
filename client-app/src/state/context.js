import React, {useContext} from 'react';

var initialState = {   
    appTitle: process.env.REACT_APP_CLIENT_NAME + ' - ' + process.env.REACT_APP_DEPLOYMENT_NAME,
    loading:false,   
    darkMode: localStorage.getItem('darkMode') && localStorage.getItem('darkMode') == 'true' ? true : false,
    user:{username:'UUUU', displayname:'דרור מוסאי'}
};

const context = React.createContext({
    ...initialState
})

export default context;