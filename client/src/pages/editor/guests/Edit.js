import React, {useContext} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {Button, Typography} from '@material-ui/core';

import EventsContext from '../../../state/context';

export default function GuestEdit(){
    const {state, dispatch} = useContext(EventsContext);
    
    return(
        <>
            <Typography variant="h1" noWrap>
                עריכת מוזמנים
            </Typography>
        </>
    )
} 