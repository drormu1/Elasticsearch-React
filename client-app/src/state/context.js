import React, {useContext} from 'react';

var initialState = {   
    configuration:null,
    activeIndex: null,
    appTitle: process.env.REACT_APP_CLIENT_NAME + ' - ' + process.env.REACT_APP_DEPLOYMENT_NAME,
    loading:false,   
    darkMode: localStorage.getItem('darkMode') && localStorage.getItem('darkMode') === 'true' ? true : false,
    term:'wine',
    results: null,
    nonActiveResults:null,
    autocompleteResults :[],
    pageSize:50,
    pageNamber:0
    //user:{username:'UUUU', displayname:'דרור מוסאי'}
};

//const top100Films = ;

const context = React.createContext({
 //   autocompleteResults : top100Films,
    ...initialState
})

export default context;