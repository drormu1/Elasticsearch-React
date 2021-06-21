import React, {useContext, useReducer,useEffect,useState} from 'react';
import SearchContext from '../../state/context';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import {initCall,autocomplete,searchNonActives,search} from '../../api/searchApi';
import { StarRateTwoTone } from '@material-ui/icons';


export default function Pager() {
  const classes = useStyles();
  const {state, dispatch} = useContext(SearchContext);
  
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  useEffect(() => {
    console.log( state);
    
   const fecthRequests = () => {
    if(state.term && state.term.length > 2)
    {                           
      fetchSearch(state.term).then(res=> {            
      fetchSearchNonActives(state.term).then(res=> { 
        console.log('after fetchSearchNonActives');
      });
  } )
  }
  }
  fecthRequests();
  }, [state.activeIndex])

  const fetchSearch = async (term) => {    
    return search(term, state).then(res => {
      dispatch({type:'SET_ACITVE_RESULTS', payload:res});        
    });
  };
  
  const fetchSearchNonActives = async (term) => {     
        return searchNonActives(term).then(res => {        
          dispatch({type:'SET_NONACTIVE', payload:res});        
        });
      };  

      
 const activeIndexChange =  (event) => 
 {
    const  index = event.target.parentElement.id;
    event.preventDefault();
    dispatch({type:'SET_ACTIVE_INDEX', payload:index});
  
 }


  return (
    <div>
     
    {state.results && state.results.length > state.pageSize ?
    <TablePagination  className={classes.root} style={{ }}
    rowsPerPageOptions={[50, 100, 500]}
    labelRowsPerPage={"תוצאות בדף"} 
    component="div"
    count={state.results.length}
    page={page}
    onChangePage={handleChangePage}
    rowsPerPage={rowsPerPage}
    onChangeRowsPerPage={handleChangeRowsPerPage}
    /> :
null}
</div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: { 
       
    direction: 'ltr',
    marginRight: '30%',
    marginTop:'8px',
    color: 'rgba(0,0,0,0.47)',
    backgroundColor: 'rgba(0,0,0,0.07)',
    width: '30%',
    borderRadius: '8px',
  },

  
  '@global': {
    '.MuiTab-root': {
      minWidth: '120px'
    }
  }
 
}));