import React, {useContext, useReducer} from 'react';
import Layout from './Layout';
import Theme from '../../components/Theme';
import {Helmet} from "react-helmet";

import SearchReducer from '../../state/reducer';
import SearchContext from '../../state/context';

function App() {
  const initialState = useContext(SearchContext);
  const [state, dispatch] = useReducer(SearchReducer, initialState);
  

  return (
    <SearchContext.Provider value={{state, dispatch}}>
    <Theme>
      <Helmet>
        <title>{process.env.REACT_APP_CLIENT_NAME + ' - ' + process.env.REACT_APP_DEPLOYMENT_NAME}</title>
      </Helmet>
      <Theme></Theme>      
    <div className="App">
      <Layout></Layout>
    </div>
    </Theme>
    </SearchContext.Provider>
  );
}

export default App;
