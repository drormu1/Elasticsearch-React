import React, {useContext, } from 'react';
import {useParams, useLocation} from 'react-router-dom';
import { format } from 'date-fns';
import {Button, Typography, Grid, Card, CardContent, CardMedia, CardHeader, CardActions, IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import EventsContext from '../../state/context';

const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 345,
      marginTop:'1rem'
    },
    cardMedia: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

export default function EventView(props){
    const {state, dispatch} = useContext(EventsContext);
    const classes = useStyles();

    return(
        <>
            <Grid container spacing={1}>
                <Grid item sm={2}>
                    <Card variant="outlined">
                        {props.event.rightIcon ? 
                        <CardMedia
                            image={props.event.rightIcon}
                            title="Right icon"
                            width={140} 
                            height={140}
                        /> :
                        <CardContent>
                            <Skeleton variant="rect" width={140} height={140} />
                        </CardContent>
                        }
                    </Card>
                </Grid>

                <Grid item sm={8}>
                    <Typography variant="h1" style={{textAlign:'center'}}>
                        {props.event.name || ''}
                    </Typography>
                </Grid>

                <Grid item sm={2}>
                    <Card variant="outlined">
                        {props.event.rightIcon ? 
                        <CardMedia
                            image={props.event.leftIcon}
                            title="Left icon"
                            width={140} 
                            height={140}
                        /> :
                        <CardContent>
                            <Skeleton variant="rect" width={140} height={140} />
                        </CardContent>
                        }
                    </Card>
                </Grid>
                
            </Grid>
            
            <Grid container justify="space-around">
                {props.event.fromDate ? 
                    <Grid item>
                        <Typography variant="h5" noWrap>
                            תחילת האירוע:
                        </Typography>
                        {props.event.fromDate ? format(props.event.fromDate, 'dd/MM/yyyy HH:mm') : 'טרם נקבע'}
                    </Grid> :
                    null
                }

                {props.event.toDate ?
                    <Grid item>
                        <Typography variant="h5" noWrap>
                            סיום האירוע:
                        </Typography>
                        {props.event.toDate ? format(props.event.toDate, 'dd/MM/yyyy HH:mm'): 'טרם נקבע'}
                    </Grid> :
                null
                }
            </Grid>

            {props.event.description ?
            <>
                <Typography variant="h5" noWrap>
                פרטי האירוע:
                </Typography>
                <div style={{whiteSpace:'pre'}}>
                    {props.event.description}
                </div>
            </> :
            null
            }

            {props.event.registerationOpenToDate ? 
                <div>
                    <Typography variant="h5" noWrap>
                    תאריך אחרון לרישום
                    </Typography>
                    {props.event.registerationOpenToDate}
                </div> : 
                null
            }

            {props.event.activities.length > 0 ?
            <>
                <Typography variant="h5" noWrap>
                    פעילויות
                </Typography>
                <Grid container>
                    {props.event.activities.map((a,i) =>
                    <Grid item sm={4} key={i}>
                        <Card className={classes.card} variant="outlined">
                            <CardHeader title={a.name} subheader={a.startAt ? format(a.startAt, 'dd/MM/yyyy HH:mm') : null + ' - ' + a.endAt ? format(a.endAt, 'dd/MM/yyyy HH:mm') : null} />
                            {a.backgroundImage ? 
                                <CardMedia className={classes.cardMedia} image={a.backgroundImage} title={a.name} />
                                :
                                <Skeleton variant="rect" height={100} width={200} />
                            }

                            {a.description ?
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">{a.description}</Typography>
                                </CardContent> : 
                                null
                            }

                            {a.subscriptable ?
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions> : null
                            }
                    </Card>
                </Grid>
                )}
            </Grid>
        </>
            // <>
            //     <Typography variant="h5" noWrap>
            //         פעילויות
            //     </Typography>
            //     {
            //         props.event.activities.map(a => 
            //         <div key={a.order} style={{backgroundImage:(a.backgroundImage || null)}}>
            //             <div>{a.name}</div>
            //             <div>{format(a.startAt, 'dd/MM/yyyy HH:mm')}</div>
            //             <div>{format(a.endAt, 'dd/MM/yyyy HH:mm')}</div>
            //             <div>{a.description}</div>
            //             <div>{a.maxGuests}</div>
            //         </div>)
            //     }
            // </> 
            :
            null
            }



    







        </>
    )
} 