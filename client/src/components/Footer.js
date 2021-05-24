import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    }
  }));

export default function Footer(){
    const classes = useStyles();
    const tag = `מערכת ${process.env.REACT_APP_CLIENT_NAME} גרסה ${process.env.REACT_APP_VERSION} פותחה ע"י אגף מל\"ן - משהב\"ט 2021`;
    return (
      <>
        {process.env.REACT_APP_SHOW_FOOTER === 'TRUE' ?
        <AppBar position="static" variant="dense" color="default" className={classes.appBar}>
            <Typography className={classes.text} variant="body1" align="center" gutterBottom>
            {tag}
            </Typography>
        </AppBar> : null}
      </>
    )
}