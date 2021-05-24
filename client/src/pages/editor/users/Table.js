import React, {useContext} from 'react';

import {Button, Typography} from '@material-ui/core';

import EventsContext from '../../../state/context';
import ModDataTable from '../../../components/ModDataTable';
import demoTableSchema from '../../../schemas/DemoTableSchema';

export default function UserTable(){
    const {state, dispatch} = useContext(EventsContext);
    const demoTableData = [
        {id:1, name:'Task 1', status:'Done'},
        {id:2, name:'Task 2', status:'Done'},
        {id:3, name:'Task 3', status:'InProgress'},
        {id:4, name:'Task 4', status:'Done'},
        {id:5, name:'Task 5', status:'Done'},
        {id:6, name:'Task 6', status:'InProgress'},
        {id:7, name:'Task 7', status:'Done'}
    ];

    return(
        <>
            <Typography variant="h1" noWrap>
                עריכת משתמש
            </Typography>

            <ModDataTable schema={demoTableSchema} rows={demoTableData}/>
        </>
    )
} 