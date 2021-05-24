import React, {useContext, useState, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {Button, Typography, FormControlLabel, Switch } from '@material-ui/core';

import EventsContext from '../../state/context';
import EventView from './EventView';

export default function Register(){
    /*
    This is the main component or the public section, to here guests signin and register 
    */
    
    const {state, dispatch} = useContext(EventsContext);
    const [ registered, setRegistered ] = useState(false);

    const selectedEvent = {}; //TODO: fetch from server, using the querystring id field. 
    
    return(
        <>
            <EventView event={selectedEvent}/>

            <FormControlLabel
                control={ <Switch checked={registered} onChange={() => setRegistered(!registered)} name="registered" color="primary" /> }
                label="הירשם לאירוע"
            />
        </>
    )
} 