import React, {useContext} from 'react';

import {Button, Typography} from '@material-ui/core';

import EventsContext from '../../../state/context';

export default function UserEdit(){
    const {state, dispatch} = useContext(EventsContext);
    
    return(
        <>
            <Typography variant="h1" noWrap>
                עריכת משתמשים
            </Typography>
        </>
    )
} 