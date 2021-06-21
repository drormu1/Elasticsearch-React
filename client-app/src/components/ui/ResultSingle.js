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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
export default function ResultSingle(props) {
    
    const classes = useStyles();
    const {state, dispatch} = useContext(SearchContext);
    
    
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

    function getSingleRow()
    {    
      
         let html=[];
         let counterColumnsPerRow = 0;
        for (var i=0;i<ui.length; i++)
        {
            const currentUI= ui[i];
            if(props.result.hasOwnProperty(currentUI.key) && !currentUI.isMultiline)
            {
                let value = props.result[currentUI.key][0] ;              
                if(value && value !== '')
                {                  
                  html.push(getFieldHtml(i,value,currentUI));                                     
                }
            }         
        }

       //html.push(<Grid item xs={12}><br/></Grid>);       
       //html.push(<Grid item xs={12}><hr className={classes.hr}/></Grid>);    
     
       return html;
    }
 
    function getFieldHtml(i,value,currentUI)
    {     
        let key= props.ind +"_"+currentUI.key+"_"+i;        
        var fieldHtml=[];
        if(currentUI.isMultiline)
        {
            fieldHtml.push(<Grid container><Grid item xs={12}  className={classes.field} >{currentUI.title}: {value}</Grid></Grid>)
        }
        fieldHtml.push(<Grid item xs={6}  className={classes.field} >{currentUI.title}: {value}</Grid>)
        // fieldHtml.push(<div key={key} className={currentUI.isMultiline ?'col-md-12 ' : 'col-md-2 '}  style={{float:'right',display : currentUI.isMultiline ? 'block' : 'flex'}} >{currentUI.title} {value}</div>);
        return fieldHtml;
    }



    return (            
            <div style={{display:'flex',width:'100%'}}>{getSingleRow()}</div>
    )
};


const useStyles = makeStyles((theme) => ({
    aggsGroupBox: {
      display: 'flex',      
      color:'rgba(0, 0, 0, 0.54)',
      marginBottom :'15px',
  
    
    },
    hr:
    {
        borderColor:'rgba(0, 0, 0, 0.05)',
    },
    field:{
        overflowX: 'hidden',
        textAlign: 'rigth',
       //// background:'red'
    }
   
  }));