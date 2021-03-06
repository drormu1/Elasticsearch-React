import React, {useContext, useReducer,useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchContext from '../../state/context';
import {initCall,autocomplete,searchNonActives,search} from '../../api/searchApi';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";


export default function SearchBox() {
 
  const classes = useStyles();
  const {state, dispatch} = useContext(SearchContext);


const fetchaAutocomplete = async (term) => {    
    return autocomplete(term, state.activeIndex);
};

const onOptionChange = (option) =>
{
  
  console.log(option);
}

const onTermsChange = (term) => {   
  console.log('term is ' + term );
  dispatch({type:'SET_TERM', payload:term});

  if(term ==  null || term.length < 3)
  {
    dispatch({type:'SET_AUTOCOMPLETE_RESULTS', payload:[]});
  }
  else
  {       
    fetchaAutocomplete(term).then(res=> { 
    // res = res.map(a=>a.replace(new RegExp(term, 'gi'), '<b>'+term+'</b>'));     
     dispatch({type:'SET_AUTOCOMPLETE_RESULTS', payload:res});
    } );
  }
}

const fetchSearch = async () => {    
  return search(state.term, state).then(res => {
    dispatch({type:'SET_ACITVE_RESULTS', payload:res});        
  });
};

const fetchSearchNonActives = async () => {     
      return searchNonActives(state.term).then(res => {        
        dispatch({type:'SET_NONACTIVE', payload:res});        
      });
    };  


    
useEffect(() => {
  const listener = event => {

    if (event.code === "Enter" || event.code === "NumpadEnter" || event.button != null) {
     
      if(!state.term ||  state.term.length < 2)
      {                
        return;
      }
      
      fetchSearch().then(res=> {           
          fetchSearchNonActives().then(res=> {             
          });
        } );
    }
  };
    document.addEventListener("keydown", listener);
    // document.addEventListener("onclick", listener);
    // document.addEventListener("ondbclick", listener);
    // document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("keydown", listener);      
      // document.removeEventListener("onclick", listener);
      // document.removeEventListener("ondbclick", listener);
      // document.removeEventListener("mousedown", listener);
    };
}, [state.term]);


  return (
    
      <Autocomplete className={classes.searchAuto}
              freeSolo
              id="autocomlete"              
              options={state != null   ? state.autocompleteResults.map(a=>a): []}              
              onChange={(event, value) => onTermsChange(value)} 
              renderInput={(params) => (
                
                <TextField
                className={classes.searchInput}    
                onChange={({ target }) =>  onTermsChange(target.value)}    
                                     
                  {...params}
                  dir='rtl'                 
                  margin="dense"
                  variant="outlined"
                  InputProps={{                  
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon style={{ color: 'white' }} />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />       
  );
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  '@global': {
    '.MuiAutocomplete-option[data-focus="true"]': {       
    },
    '.MuiInputBase-input': {
      color: 'white'
  }
  },

  searchInput:{
    border:'1px solid white',
    color:'white'
  },
  searchAuto:{
    borderRadius: '12px',
    color:'white',
   /* backgroundColor: fade(theme.palette.common.white, 0.25),*/
    width: '40%',    
    margin: '0 50px',
   

  },
  
  
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
})); 
