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
import {initCall,autocomplete,searchNonActives,search} from '../../api/searchApi';


export default function IndiciesBar() {
  const classes = useStyles();
  const {state, dispatch} = useContext(SearchContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  useEffect(() => {
    console.log( state);
    
   const fecthRequests = () => {    
    if(state.term && state.term.length > 2)
    {                           
    
    fetchSearch(state.term).then(res=> { 
    
      console.log('IndiciesBar - after search result is =' +state.results?state.results.count : 0);       
      fetchSearchNonActives(state.term).then(res=> { 
        
      });
  } )
  }
  }


  fecthRequests();
  }, [state.activeIndex])

  const fetchSearch = async (term) => {    
    return search(term, state).then(res => {
    
      dispatch({type:'SET_ACITVE_RESULTS', payload:res});        
    });
  };
  
  const fetchSearchNonActives = async (term) => {     
        return searchNonActives(term).then(res => {        
          dispatch({type:'SET_NONACTIVE', payload:res});        
        });
      };  

      
 const activeIndexChange =  (event) => 
 {
    const  index = event.target.parentElement.id;
    event.preventDefault();
    dispatch({type:'SET_ACTIVE_INDEX', payload:index});
  
 }

  const indicesInfo = state.configuration ?  state.configuration.indicesInfo.map(a=>a) : [];


  return (
    <Paper className={classes.root}  style={{
     maxWidth:'85%'     ,
     display:'inline-table'

    }}>
      <Tabs  position="fixed"        
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        
      >
        {indicesInfo.map((i)=>

          <Tab   onClick={activeIndexChange} id={i.name} label={i.title + (state.nonActiveResults != null && state.nonActiveResults.some(a=>a.name===i.name) ? 
          ` (${ state.nonActiveResults.find(a=>a.name===i.name).count})`  : "")} 
           key={i.name}/>)}
        
       
      </Tabs>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {    
    
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    marginTop :'-32px',   
    marginBottom:'10px'
  },

  
  '@global': {
    '.MuiTab-root': {
      minWidth: '120px'
    }
  }
 
}));