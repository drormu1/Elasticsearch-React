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

    const currentIndexAggregations = state.configuration ?  state.configuration.allAggregations.find(a=>state.activeIndex === a.index) : null;    
    const ui = state.configuration && state.configuration.indicesInfo.some(i=>i.name === state.activeIndex)
     ?  state.configuration.indicesInfo.find(i=>i.name === state.activeIndex).ui 
     : null;
  
    function translateField(field)
    {
        
        if(ui)
        {
           
            return ui.some(f=>f.key === field) ?  ui.find(f=>f.key === field).title : field;
        }
    }

    return (
        <div className={classes.aggsGroupRoot}>
            {currentIndexAggregations != null ?                                
             currentIndexAggregations.aggs.map ( agg => ( 
                
                        <div className={classes.aggsGroupBox}     key={agg.field}>
                        <FormControl component="fieldset" className={classes.aggsGroup}>
                            <FormLabel component="legend"
                             
                              className={classes.legend}>{translateField(agg.field)}</FormLabel>
                            <Divider/>
                            <FormGroup className={classes.aggsGroupChild}>
                                {agg.list.sort().map(a => (
                                      <FormControlLabel className={classes.aggField}
                                      key={agg + "_"+ a}
                                      classes={{
                                        label: classes.label, // Pass your override css here
                                    }}
                                    style={{
                                        fontSize:'0.9em',
                                        height:'1.1em',
                                        marginRight:0,
                                       
                                    }}
                                      control={
                                        <Checkbox className={classes.aggCheck}
                                        //   checked={state.checkedB}
                                        //   onChange={handleChange}
                                        style={{
                                            fontSize:'0.75em',
                                            
                                        }}
                                          name={a}
                                          color="primary"
                                        />
                                      } 
                                      label={a}
                                    />         
                                )).sort()}
                            </FormGroup>
                            {/* <FormHelperText>You can display an error</FormHelperText> */}
                            
                        </FormControl>
                        </div>
                  ))
               
             : <p></p>
            }
           
        </div>
    )
};


const useStyles = makeStyles((theme) => ({
    aggsGroupBox: {
      display: 'flex',      
      color:'rgba(0, 0, 0, 0.54)',
      marginBottom :'15px',
      overflowX: 'hidden',
      // 'max-height': '150px',
      overflowY: 'auto',
      borderRadius: '5px',
      textAlign: 'center',
      border : '1px solid rgba(0, 0, 0, 0.14)' ,
      maxHeight: '200px',    
    },

    aggsGroupRoot:
    {        
        padding:theme.spacing(0),
        marginTop: '-20px', 
    },
  
    aggsGroup: {                  
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        maxHeight: '200px',
        

    },
    legend: {     
        color:'rgba(256, 256, 256)', 
        width: '100%',        
        backgroundColor:'rgba(0, 0, 0, 0.54)',
        padding: '2px',               
        fontsize:'0.9em',
        '&:focused': {
            background: "#efefef"
          },
    },
    label:
    {   
        fontSize:'0.9em',        
        height:'1em',
        width : '300px',
        overflowX:'clip',
        textAlign:'right',
        '&:focused': {
            background: "#efefef"
          },
    },
    aggCheck:
    {
        transform: "scale(0.75)",
        padding:'0px',
    }
  }));