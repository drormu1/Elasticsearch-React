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
import {initCall,autocomplete} from '../../api/searchApi';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import  SearchBox from './SearchBox';

export default function Header() {
 
  const classes = useStyles();
  const {state, dispatch} = useContext(SearchContext);
  useEffect(() => {
    const fetchData = async () => {
      //console.log('in header is header useEffect '+state.configuration)   ;
      if(state.configuration == null)
      {              
          return initCall().then(payload => {
            dispatch({type:'SET_INIT_CONFIGURATION', payload});    
            //console.log('in header '+state.configuration)   ;            
          });          
      }     
    };
 
    fetchData();
  }, []);


  

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>          
             {state.appTitle}
           </Typography>
           
           {state.configuration ?
           <SearchBox />  :
           null}
                              
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>           
            <IconButton
              edge="end"
              aria-label="account of current user"             
              aria-haspopup="true"             
              color="inherit"
            >
              <AccountCircle />
              <Typography variant="subtitle1" noWrap>          
            {state.configuration ? state.configuration.user.displayName : null}
           </Typography>
                
              </IconButton>
          </div>
          
        </Toolbar>
      </AppBar>  
      <div className={classes.toolbar}></div>
    </div>
    
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
  
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
})); 
