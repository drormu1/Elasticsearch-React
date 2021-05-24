import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import EventsContext from '../state/context';

export default function FileUploader(props){
    // const classes = useStyles();
    // const {state, dispatch} = useContext(EventsContext);
    const [files, setFiles] = useState(null);
    const multiple = props.multiple || false;

    function selectedCallback(files){
      
      console.log(files);
      setFiles(files);
      props.onSelected(files);
    }

    //TODO: use https://www.npmjs.com/package/react-filepond
    return (
      <>
        <Button variant="contained" color="primary" component="label"> 
          {props.text}
          <input type="file" hidden multiple={multiple} onChange={(e) => selectedCallback(e.target.files)} />
        </Button>
        {files ? Array.from(files).map(f => <div>{f.name}</div>) : null}
      </>
    )
}