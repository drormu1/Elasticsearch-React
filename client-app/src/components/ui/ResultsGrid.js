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

    
    // function getFieldHtml(value,currentUI)
    // {     
    //     let styles =   'float: right';
    //     let classes = 'col-xs-2'
    //     return <div  className={classes} style={{float:'right'}} >{currentUI.title} {value}</div>;
    // }
    // function getHtmlForEachResult(res)
    // {
       
    //     let html=[];

    //     for (var i=0;i<ui.length; i++)
    //     {
    //         const currentUI= ui[i];
    //         if(res.hasOwnProperty(currentUI.key))
    //         {
    //             let value = res[currentUI.key][0] ;              
    //             if(value && value!= '')
    //             {
    //                 html.push(getFieldHtml(value,currentUI));
    //             }
    //         }         
    //     }
       
     
        
      
    //     return html;

    // }

    return (
        <div id="all-results" className={classes.Root}>
        <Grid container  justify="space-between"   alignItems="center"  >
            {state.results ? 
             
                        state.results.map ((res,index) =>                    
                        <ResultSingle   result={res} ind={index}/>)
             : null
            }
           
           </Grid>
           </div>
    )
};


const useStyles = makeStyles((theme) => ({
   
    Root:
    {    
        flexGrow: 1,    
        padding:theme.spacing(0),        
    }
  }));