import React, { useState, useContext } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { heIL } from '@material-ui/core/locale';
import {blue, indigo, deepOrange, pink } from '@material-ui/core/colors'; //https://material-ui.com/customization/color/#playground

// Configure JSS
//import EventsContext from '../state/context';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function Theme(props) {
  //const {state, dispatch} = useContext(EventsContext);
  
  const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
      primary: blue,
      secondary: pink,
      type: 'light'  //state.darkMode ? 'dark' : 'light',
    }
  }, heIL);

  return (
    <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    </StylesProvider>
  );
}