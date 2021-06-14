import React, {useContext, useReducer,useEffect,useState} from 'react';
import SearchContext from '../../state/context';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';



export default function IndiciesBar() {
  const classes = useStyles();
  const {state, dispatch} = useContext(SearchContext);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  

  const indicesInfo = state.configuration ?  state.configuration.indicesInfo.map(a=>a) : [];


  return (
    <Paper className={classes.root}  style={{
      padding: '0px',     
    }}>
      <Tabs  position="fixed"        
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        
      >
        {indicesInfo.map((i)=><Tab   label={i.title}  key={i.name}/>)}
        
       
      </Tabs>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {    
    flexGrow: 1,  
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    marginTop :'-25px',   
  },
 
}));