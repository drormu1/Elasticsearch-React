import React from 'react';
import { Box } from '@material-ui/core';

export default function Json(props){
    return (
    <Box style={{direction:'ltr', textAlign:'left', whiteSpace:'pre'}}>
        {JSON.stringify(props.data, null, 4)}
    </Box>);
}