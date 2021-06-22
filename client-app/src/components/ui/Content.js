import React, {useContext, useReducer,useEffect} from 'react';
import SearchContext from '../../state/context';
import { fade, makeStyles } from '@material-ui/core/styles';
import IndiciesBar from './IndiciesBar';
import Pager from './Pager';
import ResultsGrid from './ResultsGrid';
import Paper from "@material-ui/core/Paper";

export default function Content() {
    const classes = useStyles();
    const {state, dispatch} = useContext(SearchContext);
    
    
    return (
        <div style={{textAlign:'center'}}>
            { state.configuration && state.configuration.indices.length > 1 ?
            <IndiciesBar/>
            : null }
            
            <Pager></Pager>
            <ResultsGrid/>    
        </div>
    )
};  


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    }
  })); 
   