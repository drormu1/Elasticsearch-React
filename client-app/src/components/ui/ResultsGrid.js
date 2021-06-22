import React, {useContext, useReducer,useEffect} from 'react';
import SearchContext from '../../state/context';
import { fade, makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { red } from '@material-ui/core/colors';
import { FilterListRounded, Height } from '@material-ui/icons';
import { Divider } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import ResultSingle from './ResultSingle';

import Grid from '@material-ui/core/Grid';
export default function ResultsGrid() {
    const classes = useStyles();
    const {state, dispatch} = useContext(SearchContext);

    const currentIndexAggregations = state.configuration ?  state.configuration.allAggregations.find(a=>state.activeIndex === a.index) : null;    
    const ui = state.configuration && state.configuration.indicesInfo.some(i=>i.name === state.activeIndex)
     ?  state.configuration.indicesInfo.filter(i=>i.name === state.activeIndex)[0].ui 
     : null;

    function translateField(field)
    {
        if(ui)
        {           
            return ui.some(f=>f.key === field) ?  ui.find(f=>f.key === field).title : field;
        }
    }

    

    return (
        <div id="all-results" className={classes.Root}>
       
            {state.results ?      
                   
                       state.results.state.results.map(r=>r.fields).map ((res,index) =>                    
                        <ResultSingle key={index}   result={res} ind={index}/>)
             : null
            }
           
         
           </div>
    )
};


const useStyles = makeStyles((theme) => ({
   
    Root:
    {    
        marginTop:'20px',
        flexGrow: 1,    
        padding:theme.spacing(0),        
    }
  }));