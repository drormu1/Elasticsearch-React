import React, {useContext} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {Button, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

import EventsContext from '../../../state/context';

const useStyles = makeStyles((theme) => ({
    root: {
      transform: 'translateZ(0px)',
      flexGrow: 1,
      minHeight:'800px'
    },
    // exampleWrapper: {
    //   position: 'relative',
    //   marginTop: theme.spacing(3),
    //   height: 380,
    // },
    // radioGroup: {
    //   margin: theme.spacing(1, 0),
    // },
    speedDial: {
      position: 'absolute',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
  }));

export default function EventTable(){
    const {state, dispatch} = useContext(EventsContext);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
        { icon: <FavoriteIcon />, name: 'Like' },
      ];

    return(
        <Paper evelation={3} className={classes.root} >
            <Typography variant="h1" noWrap>
                טבלת מפגשים
            </Typography>

            <SpeedDial
                ariaLabel="SpeedDial example"
                className={classes.speedDial}
                hidden={false}
                icon={<SpeedDialIcon />}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                direction={'up'}
                >
                {actions.map((action) => (
                    <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={() => { alert('a'); setOpen(false); }}
                    />
                ))}
            </SpeedDial>
        </Paper>
    )
} 