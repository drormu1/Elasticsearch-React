import React, {useContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, HashRouter, Route, Switch , Link } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import { Container, Button, Backdrop, CircularProgress, Paper, Toolbar, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import {Helmet} from "react-helmet";

import EventsReducer from './state/reducer';
import EventsContext from './state/context';
import Routes from './routes';

import Theme from './components/Theme';
import Layout from './components/Layout';

import Loading from './components/Loading';
import Footer from './components/Footer';
import Demo from './pages/Demo';

const useStyles = makeStyles((theme) => ({
  content: {
    // marginTop:'2rem',
    marginBottom:'1rem',
    padding:'1rem',
    minHeight:'84.5vh'
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleBackToTopClick = (event) => {
    //go back to the h1 tag (which usually on top)
    const anchor = (event.target.ownerDocument || document).querySelector('h1'); //#back-to-top-anchor

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleBackToTopClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default function App(props) {
  const initialState = useContext(EventsContext);
  const [state, dispatch] = useReducer(EventsReducer, initialState);
  const classes = useStyles();

  return (
    <EventsContext.Provider value={{state, dispatch}}>
      <Helmet>
        <title>{state.appTitle}</title>
      </Helmet>
      <Theme>
        <HashRouter>
          <Container maxWidth={false}>
            <React.Suspense fallback={Loading}>
              <Layout>
                <Switch>
                  <div className={clsx(classes.content)}>
                    {Routes.map((r,i) => <Route key={i} {...r}></Route>)}
                  </div>
                </Switch>
                <ScrollTop {...props}>
                  <Fab color="secondary" size="small" aria-label="גלול לראשית הדף">
                    <KeyboardArrowUpIcon />
                  </Fab>
                </ScrollTop>
                <Snackbar open={state.snackbar.opened} autoHideDuration={6000} onClose={() => dispatch({type:'NOTIFY', payload:{ message:'TEST', color: 'success', opened:false}})}>
                  <Alert onClose={() => dispatch({type:'NOTIFY', payload:{ message:'TEST', color: 'success', opened:false}})} severity={state.snackbar.color}>
                    {state.snackbar.message}
                  </Alert>
                </Snackbar>
              </Layout>
              <Loading />
              <Footer />  
            </React.Suspense>
          </Container>
        </HashRouter>
      </Theme>
    </EventsContext.Provider>
  );
}