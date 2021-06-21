import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchContext from '../../state/context';
import {initCall} from '../../api/searchApi';
import IndiciesBar from './IndiciesBar';
import Pager from './Pager';
import ResultsGrid from './ResultsGrid';
import Paper from "@material-ui/core/Paper";

export default function Content() {
    const classes = useStyles();

    return (
        <div style={{textAlign:'center'}}>
            <IndiciesBar/>
            
            <ResultsGrid/>
            
            <Pager/>
          
        </div>
    )
};  


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    }
  })); 
   