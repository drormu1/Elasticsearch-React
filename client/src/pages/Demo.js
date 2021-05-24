import React, {useContext} from 'react';

import {Button, Typography} from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import EventsContext from '../state/context';
import ModDataTable from '../components/ModDataTable';

import demoTableSchema from '../schemas/DemoTableSchema';

export default function Demo(){
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

    return (
        <>
            <h1>Demo Page</h1>
            <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>

            <ModDataTable schema={demoTableSchema} rows={demoTableData}/>

            <Button variant="contained" color="primary" onClick={() => dispatch({type:'TOGGLE_LOADING'})}>
              Test loading <AccessAlarm/>
            </Button>
        </>
    );
}