import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import {AppBar, Toolbar, List, Drawer, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Switch, FormControlLabel, InputBase, MenuItem, Menu, Tooltip } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Routes from '../routes';
import EventsContext from '../state/context';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

 
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
    color: 'green',
    backgroundColor:'#fff'
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
  pullLeft:{
    marginLeft:'auto !important',
    marginRight:'unset !important',
    width:'auto'
  }
}));

export default function Layout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {state, dispatch} = useContext(EventsContext);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);


 

 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>                              
           <Typography variant="h6" noWrap>
             {state.appTitle}
           </Typography>
           
           <div className={classes.search}>
             <div className={classes.searchIcon}>
               <SearchIcon />
             </div>
             <InputBase
               placeholder="חיפוש..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'חיפוש' }}
            />
          </div>
          <div className={clsx(classes.pullLeft)}>
            <FormControlLabel
              control={<Switch checked={state.darkMode} onChange={() => dispatch({type:'TOGGLE_DARK_MODE'})} name="darkMode" />}
              label="החלף תצוגה"
            />
          </div>
          {state.user && (
            <div className={clsx(classes.pullLeft)}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"              
                color="inherit"
              >
                 שלום,{state.user.displayname}
              <AccountCircle />
               
              </IconButton>
             
            </div>
          )}

        </Toolbar>
      </AppBar>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.children}
      </main>
    </div>
  );
}