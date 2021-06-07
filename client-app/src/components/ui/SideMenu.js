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
import { Height } from '@material-ui/icons';
import { Divider } from '@material-ui/core';

export default function SideMenu() {
    const classes = useStyles();
    const {state, dispatch} = useContext(SearchContext);

    const currentIndexAggregations = state.configuration ?  state.configuration.allAggregations.filter(a=>state.activeTab === a.index)[0] : null;

    return (
        <div className={classes.aggsGroupRoot}>
            {currentIndexAggregations != null ?                                
             currentIndexAggregations.aggs.map ( agg => ( 
                       
                        <div className={classes.aggsGroupBox}>
                        <FormControl component="fieldset" className={classes.aggsGroup}>
                            <FormLabel component="legend"  className={classes.legend}>{agg.field}</FormLabel>
                            <Divider/>
                            <FormGroup className={classes.aggsGroupChild}>
                                {agg.list.map(a => (
                                      <FormControlLabel className={classes.aggField}
                                      classes={{
                                        label: classes.label, // Pass your override css here
                                    }}
                                      control={
                                        <Checkbox className={classes.aggCheck}
                                        //   checked={state.checkedB}
                                        //   onChange={handleChange}
                                          name={a}
                                          color="primary"
                                        />
                                      } 
                                      label={a}
                                    />         
                                ))}
                                        </FormGroup>
                            {/* <FormHelperText>You can display an error</FormHelperText> */}
                            
                        </FormControl>
                        </div>
                  ))
               
             : <p> SideMenu</p>
            }
           
        </div>
    )
};


const useStyles = makeStyles((theme) => ({
    aggsGroupBox: {
      display: 'flex',      
      color:'rgba(0, 0, 0, 0.54)',
      'margin-bottom' :'15px',
      'overflow-x': 'hidden',
        'max-height': '200px',
        'overflow-y': 'scroll',
        'border-radius': '5px',
        border : '1px solid rgba(0, 0, 0, 0.14)' ,
    
    },
    aggsGroupRoot:
    {        
        padding:theme.spacing(0),
        'margin-top': '-40px',                
    },
    aggsGroup: {
       
        width: '260px',      
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        'max-height': '200px',
    },
    legend: {     
        color:'rgba(256, 256, 256)', 
        width: '100%',        
        'background-color':'rgba(0, 0, 0, 0.54)',
        padding: '2px',        
        'font-weight':'bold',
        'font-size':'0.85em',
    },
    label:
    {   
        'font-size':'0.85em',
    },
    aggCheck:
    {     
        padding:'0px',
    }
  }));