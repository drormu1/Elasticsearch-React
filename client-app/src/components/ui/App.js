import React, {useContext, useReducer} from 'react';
import Layout from './Layout';
import {Helmet} from "react-helmet";
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchReducer from '../../state/reducer';
import SearchContext from '../../state/context';

function App() {
  const initialState = useContext(SearchContext);
  const [state, dispatch] = useReducer(SearchReducer, initialState);
  

  return (
    <SearchContext.Provider value={{state, dispatch}}>
   
      <Helmet>
        <title>{process.env.REACT_APP_CLIENT_NAME + ' - ' + process.env.REACT_APP_DEPLOYMENT_NAME}</title>
      </Helmet>
   
    <div className="App">
      <Layout></Layout>
    </div>
   
    </SearchContext.Provider>
  );
}

export default App;


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }
})); 

