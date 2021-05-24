
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import Content from './Content';


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function Layout() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
                <Header/>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><SideMenu></SideMenu></Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}><Content></Content></Paper>
        </Grid>
        <Grid item xs={12}>
             saassa   <Footer/>
        </Grid>
      </Grid>
    </div>
  );
   
       
    
};