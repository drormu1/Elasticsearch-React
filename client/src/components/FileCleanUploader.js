import React, { useState, useContext } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import EventsContext from '../state/context';

export default function FileCleanUploader(){
    // const classes = useStyles();
    const {state, dispatch} = useContext(EventsContext);
    return (
        <Backdrop className={classes.backdrop} open={state.loading} onClick={() => dispatch({type:'TOGGLE_LOADING'})}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}