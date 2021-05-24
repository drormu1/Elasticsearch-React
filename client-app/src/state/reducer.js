// import React, {useReducer} from 'react';
export default function reducer(state, action){
    console.log('Handling ' + action.type);
    switch(action.type){
        case 'TOGGLE_DARK_MODE':
            localStorage.setItem(!state.darkMode,'true');
            return {
                ...state,
                darkMode: !state.darkMode
            }
        case 'TOGGLE_SIDE_BAR':
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            }
        case 'TOGGLE_LOADING':
            return {
                ...state,
                loading: !state.loading
            }
        case 'TOGGLE_ASIDE':
            return {
                ...state,
                asideOpened: !state.asideOpened
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'NOTIFY':
            return {
                ...state,
                snackbar: {opened: action.payload.opened, message: action.payload.message, color: action.payload.color}
                    }
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        
        default:
            return state;
    }
}