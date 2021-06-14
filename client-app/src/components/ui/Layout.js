import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import Content from './Content';
import SearchContext from '../../state/context';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  const { state, dispatch } = useContext(SearchContext);
  return (

    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      { state.configuration ?
       
       state.results   ?        
        <Grid item xs={12}>
          <Grid container spacing={2} style={{ 'minHeight': '800px' , marginTop : '20px' }}>
            <Grid item xs={2} style={{ 'maxWidth': '13%' }}>
              <SideMenu></SideMenu>
            </Grid>
            <Grid item xs={10}>
              <Content></Content>
            </Grid>
          </Grid>
        </Grid> 
        :
        <Grid container spacing={2} style={{ 'minHeight': '800px' }}>
                <div style={{
                  color:'rgba(0, 0, 0, 0.54)',
                  marginRight: '500px',
                  width: '100%',            
                }}>
                 {/* <CircularProgress />             */}
                הקלד מילת חיפוש (לפחות 3 תווים)
                </div>
        </Grid>
        : <div style={{minHeight : '800px'}}></div>
        
      }
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>

  );



};