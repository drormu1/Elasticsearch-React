import React, {useContext, useReducer,useEffect} from 'react';
import moment from "moment";
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
import { Divider, getLuminance } from '@material-ui/core';
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

    function getFieldOnSameRow()
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
                  html.push(getFieldHtml(i,value,currentUI,2));                                     
                }
            }         
        }

       return html;
    }


    function getMultiLineFields()
    {
        let html=[];
        let counterColumnsPerRow = 0;
      
       for (var i=0;i<ui.length; i++)
       {
           const currentUI= ui[i];
           if(props.result.hasOwnProperty(currentUI.key) && currentUI.isMultiline)
           {
               let value = props.result[currentUI.key][0] ;              
               if(value && value !== '')
               {              
                     
                 html.push(<Grid  key={`${currentUI.key}_${i}`} container>{getFieldHtml(i,value,currentUI,12)}</Grid>);                                     
               }
           }         
       }
      return html;
    }

   
    
 
    function getFieldHtml(i,value,currentUI,width)
    {     
        let key= `${props.ind}_${currentUI.key}_${i}_${Math.random(100000)}`;        
        var fieldHtml=[]; 
        if(currentUI.pipe)
        {
            switch (currentUI.pipe) {
                case 'int' :
                    value =  value.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
                    break;
                case 'decimal' :
                    value =  value.toLocaleString(navigator.language, { minimumFractionDigits:3 });
                    break;
                case 'datetime' :
                    value =  moment(value).format("HH:mm:ss DD-MM-YYYY");                     
                        break;
                case 'date' :
                    value =  moment(value).format("DD-MM-YYYY");                     
                        break;
                default:
                    break;

            }

        }
       
        fieldHtml.push(<Grid key={key} item xs={width} title={value}  className={classes.field} ><span xs={1} className={classes.label}> {currentUI.title}: </span>{value}</Grid>)
        return fieldHtml;
    }

   

    return (
            <div>
                <Grid container   >
                    {getFieldOnSameRow()}
                </Grid>
                {getMultiLineFields()}
                <hr className={classes.hr}/>
            </div>
    )
};


const useStyles = makeStyles((theme) => ({
 
    hr:
    {
        borderColor:'rgba(0, 0, 0, 0.05)',
    },
    field:{
        overflowX: 'hidden',
        textAlign: 'right',
        fontSize:'0.9em',
        marginBottom:'5px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
       //// background:'red'
    },
    label:{
      width: '120px',
      overflow:'hidden',
      display: 'flex',
    //   background:  'rgba(0, 0, 0, 0.05)',
    color :'#3f51b5',
     // padding: '0px 5px',
    //  margin:'2px',
      borderRadius:'3px'
    }
   
  }));