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
import {initCall} from '../../api/searchApi';


export default function Header() {

  const classes = useStyles();
  const {state, dispatch} = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      console.log('in header is header useEffect '+state.configuration)   ;
      if(state.configuration == null)
      {              
          return initCall().then(res => {
            dispatch({type:'SET_INIT_CONFIGURATION', payload:res});    
            console.log('in header '+state.configuration)   ;
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
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder=""
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
})); 
