import React, {useState, useContext} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import 'date-fns';
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import heLocale from "date-fns/locale/he";
import { positions } from '@material-ui/system';

import { Box, Chip, Toolbar, Paper, Button, Divider, Switch, IconButton, FormControlLabel, Card, Grid, Typography, TextField, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText,TableCell,TableBody,TableRow,TableHead,Table,TableContainer } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';

// import { DeleteIcon, ArrowDownwardsIcon, ArrowUpwardsIcon} from '@material-ui/icons';

import Json from '../../../components/Json';
import FileUpload from '../../../components/FileUploader';
import EventView from '../../public/EventView';

import EventsContext from '../../../state/context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding:'1rem'
    // '& .MuiTextField-root': {
    //   margin: theme.spacing(1),
    //   // padding:'1rem'
    //   // width:'100%'
    //   // width: '25ch',
    // },
  },
  paper:{
    // padding:'1rem',
    padding: theme.spacing(2),
  },
  groupChips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));

const prestineEventForm = {
  id:'705cdcdd-1c38-4204-b6d4-9a5961f8f04c', //use GUID so people will not be able to mess with the params in the query string
  name:'',
  description:'',
  fromDate:null,
  toDate:null,
  registerationOpenFromDate:null,
  registerationOpenToDate:null,
  leftLogo:null,
  rightLogo:null,
  backgroundImage:null,
  guestAdGroups:[],
  activities:[],
  sendMorningReminder:false,
  send2DaysReminder:false,
  send7DaysReminder:false,
  confirmationMessage:null,
};

const prestineEventFormValidation = {
  name:'שדה חובה',
  description:null,
  fromDate:null,
  toDate:null,
  registerationOpenFromDate:null,
  registerationOpenToDate:null,
  leftLogo:null,
  rightLogo:null,
  backgroundImage:null,
  guestAdGroups:null,
  activities:null,
  sendMorningReminder:null,
  send2DaysReminder:null,
  send7DaysReminder:null,
  confirmationMessage:null,
};

const prestineActivityForm = {
  id: -1,
  order:-1,
  startAt:null,
  endAt:null,
  name:'',
  description:'',
  backgroundImage:null,
  subscriptable:false,
  maxGuests:null
};

const prestineActivityFormValidation = {
  startAt:null,
  endAt:null,
  name:null,
  description:null,
  backgroundImage:null,
  subscriptable:null,
  maxGuests:null
};

export default function EventEdit() {
  const { id } = useParams();
  const { query, search } = useLocation();

  console.log(id);
  console.log(query);
  console.log(search);
  
  const classes = useStyles();
  const {state, dispatch} = useContext(EventsContext);
  
  const [form, setForm] = useState({...prestineEventForm});
  const [eventFormValidation, setEventFormValidation] = useState({...prestineEventFormValidation});
  const [group, setGroup] = useState('');

  const [addActivityModalOpened, setAddActivityModalOpened] = useState(false);
  const [activityForm, setActivityForm] = useState({...prestineActivityForm});
  const [activityFormValidation, setActivityFormValidation] = useState({...prestineActivityFormValidation});

  function saveActivity(){
    if(activityForm.order == -1){ //add
      activityForm.order = form.activities.length + 1
      let activities = [...form.activities, activityForm];
      setForm({...form, activities: activities});
    }else{ //edit
      form.activities[activityForm.order - 1] = activityForm;
      setForm(form);
    }
    
    setAddActivityModalOpened(false);
    setActivityForm(prestineActivityForm);
  }

  function submitEvent(){
    alert('Saved');
  }

  function array_move(arr, old_index, new_index) {
    console.log('ARR');
    console.log(arr);

    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  };

  function activityAction(type, activity, index){
    switch(type){
      case 'UP':
        if(index > 0){
          form.activities[index].order = index - 1;
          setForm({...form, activities: array_move(form.activities, index, index - 1)});
        }
        break;
      case 'DOWN':
        if(form.activities.length > index){
          form.activities[index].order = index + 1;
          setForm({...form, activities: array_move(form.activities, index, index + 1)});
        }
        break;
      case 'EDIT':
        setActivityForm(activity);
        setAddActivityModalOpened(true);
        break;
      case 'DELETE':
        if(window.confirm('האם אתה בטוח שאתה רוצה למחוק את הפעילות "' + activity.name + '"')){
          setForm({...form, activities: form.activities.filter(a => a.name != activity.name)});
        }
        break;
    }
  }

  function formAdAction(type, name){
    switch(type){
      case 'ADD':
        if(form.guestAdGroups.indexOf(group) === -1){
          setForm({...form, guestAdGroups:[...form.guestAdGroups, group]});
          setGroup('');
        }else{
          dispatch({type:'NOTIFY', payload:{color:'error', message:'קבוצה זו כבר נוספה לרשימת התפוצה', opened:true}});
        }
        break;
      case 'REMOVE':
        setForm({...form, guestAdGroups: form.guestAdGroups.filter(a => a != name)});
        break;
    }
  }

  function handleGroupInputChanged(e){
    if(e.key == 'Enter' && group != ''){
      formAdAction('ADD');
    }
  }

  function handleFiles(files){
    console.log(files);
  }

  return (
    <Grid xs={12} className={classes.root} container spacing={3}>
    
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={heLocale}>
          <Typography variant="h2" noWrap>
              יצירת אירוע חדש
          </Typography>

          <Typography variant="h5" noWrap style={{marginTop:'2rem', marginBottom:'2rem'}}>
            מה האירוע?
          </Typography>
          
          <Grid container justify="space-around">
            <TextField error={eventFormValidation.name} id="name" fullWidth value={form.name} variant="outlined" label="כותרת האירוע" helperText={eventFormValidation.name || "כותרת האירוע"} onChange={(e) => setForm({...form, name:e.target.value})} />
            <TextField error={eventFormValidation.description} id="description" fullWidth label="תיאור" variant="outlined" helperText={eventFormValidation.description || "פרטים מלאים על הירוע"} multiline onChange={(e) => setForm({...form, description:e.target.value})}/> 
          </Grid>

          <Typography variant="h5" noWrap style={{marginTop:'2rem', marginBottom:'2rem'}}>
            את מי מזמינים?
          </Typography>
          
          <Grid container justify="space-around">
            {/* TODO: Autocomplete - Asynchronous requests */}
            <TextField id="name" fullWidth value={group} label="קבוצות משתתפות" onChange={(e) => setGroup(e.target.value)} onKeyPress={(e) => handleGroupInputChanged(e)} />
            <div className={classes.groupChips}>
              {
                form.guestAdGroups.map((g,index) => <Chip key={g} label={g} onDelete={() => formAdAction('REMOVE', g)} color="primary" />)
              }
            </div>
          </Grid>

          <Divider style={{marginTop:'2rem', marginBottom:'2rem'}} />

          <Typography variant="h5" noWrap>
            מתי האירוע?
          </Typography>
          <Grid container justify="space-around">
            <KeyboardDateTimePicker
                margin="normal"
                id="fromDate"
                label="תאריך תחילת האירוע"
                format="dd/MM/yyyy HH:mm"
                value={form.fromDate}
                minDate={new Date()}
                onChange={(date) => setForm({...form, fromDate:date})}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
              />

              <KeyboardDateTimePicker
                margin="normal"
                id="date-picker-dialog"
                label="תאריך סיום האירוע"
                format="dd/MM/yyyy HH:mm"
                value={form.toDate}
                minDate={form.fromDate}
                disabled={!form.fromDate}
                onChange={(date) => setForm({...form, toDate:date})}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
              />
          </Grid>

          <Divider style={{marginTop:'2rem', marginBottom:'2rem'}} />

          <Typography variant="h5" noWrap>
            ממתי ועד מתי אפשר להירשם?
          </Typography>
          <Grid container justify="space-around">
            <KeyboardDateTimePicker
                margin="normal"
                id="fromDate"
                label="תאריך תחילת הרשמה"
                format="dd/MM/yyyy HH:mm"
                value={form.registerationOpenFromDate}
                minDate={new Date()}
                maxDate={form.fromDate}
                onChange={(date) => setForm({...form, registerationOpenFromDate:date})}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
              />

              <KeyboardDateTimePicker
                margin="normal"
                id="date-picker-dialog"
                label="תאריך גמר הרשמה"
                format="dd/MM/yyyy HH:mm"
                value={form.registerationOpenToDate}
                minDate={form.registerationOpenFromDate}
                disabled={!form.registerationOpenFromDate}
                onChange={(date) => setForm({...form, registerationOpenToDate:date})}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
              />
          </Grid>
          
          <Divider style={{marginTop:'2rem', marginBottom:'2rem'}} />

          <Typography variant="h5" noWrap>
            מה עושים באירוע?
          </Typography>

          <Toolbar>
            <Button
              variant="contained"
              color="primary"
              style={{textAlign:'left'}}
              startIcon={<AddIcon />}
              disabled={!form.fromDate}
              onClick={() => setAddActivityModalOpened(true)}
            >
              הוסף פעילות
            </Button>
          </Toolbar>
          {form.activities && form.activities.length > 0 ?
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>שם</TableCell>
                  <TableCell>התחלה</TableCell>
                  <TableCell>סיום</TableCell>
                  <TableCell>דרוש רישום פרטני</TableCell>
                  <TableCell>מספר משתתפים מקסימלי</TableCell>
                  <TableCell>פעולות</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {form.activities.map((activity, index) => (
                  <TableRow key={activity.name} onDoubleClick={() => console.log(activity)}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {activity.name}
                    </TableCell>
                    <TableCell>{activity.startAt ? format(activity.startAt, 'dd/MM/yyyy HH:mm') : ''}</TableCell>
                    <TableCell>{activity.endAt ? format(activity.endAt, 'dd/MM/yyyy HH:mm') : ''}</TableCell>
                    <TableCell>{activity.subscriptable ? 'כן' : 'לא'}</TableCell>
                    <TableCell>{activity.maxGuests}</TableCell>
                    <TableCell>
                      <IconButton aria-label="up" size="medium" disabled={activity.order == 1} onClick={() => activityAction('UP', activity, index)}>
                        <ArrowUpwardIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="down" size="medium" disabled={activity.order == form.activities.length} onClick={() => activityAction('DOWN', activity, index)}>
                        <ArrowDownwardIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="edit" size="medium" onClick={() => activityAction('EDIT', activity, index)}>
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="medium" onClick={() => activityAction('DELETE', activity, index)}>
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          : 
          <Alert severity="warning" style={{marginTop:'2rem', marginBottom:'2rem'}}>פרטים - יש, לו"ז - יש... אבל לא עושים כלום... יש להוסיף לפחות פעילות אחת לאירוע.</Alert>
          }

          <Dialog
            open={addActivityModalOpened}
            onClose={() => setAddActivityModalOpened(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">הוספת פעילות חדשה</DialogTitle>
            <DialogContent>
              <TextField id="activityName" style={{width:'100%'}} value={activityForm.name} label="שם הפעילות" onChange={(e) => setActivityForm({...activityForm, name:e.target.value})} />
              <Grid>
                <KeyboardDateTimePicker
                    margin="normal"
                    id="activityStartAt"
                    label="תחילת פעילות"
                    format="dd/MM/yyyy HH:mm"
                    value={activityForm.startAt}
                    minDate={form.fromDate}
                    disabled={!form.fromDate}
                    onChange={(date) => setActivityForm({...activityForm, startAt:date})}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                  />

                <KeyboardDateTimePicker
                  margin="normal"
                  id="activityEndAt"
                  label="סיום פעילות"
                  format="dd/MM/yyyy HH:mm"
                  value={activityForm.endAt}
                  minDate={activityForm.startAt}
                  disabled={!activityForm.startAt}
                  onChange={(date) => setActivityForm({...activityForm, endAt:date})}
                  KeyboardButtonProps={{
                      'aria-label': 'change date',
                  }}
                />
              </Grid>

              <TextField id="activityDescription" fullWidth helperText="פרטים מלאים על הפעילות" label="תיאור" variant="outlined" multiline onChange={(e) => setActivityForm({...activityForm, description:e.target.value})}/> 
              
              <br/>

              <TextField id="maxGuests" type="number" value={activityForm.maxGuests} label="מקסימום משתתפים" onChange={(e) => setActivityForm({...activityForm, maxGuests:e.target.value})} />
              
              <br/>
              <FormControlLabel
                control={
                  <Switch
                    checked={activityForm.subscriptable}
                    onChange={(e) => setActivityForm({...activityForm, subscriptable:e.target.checked})}
                    name="subscriptable"
                    color="primary"
                  />
                }
                label="דרוש רישום פרטני"
              />
              
              <br/>
              <FileUpload text="בחר תמונת רקע" onSelected={handleFiles} multiple={false}/>

            </DialogContent>
            <DialogActions>
              <Button onClick={() => setAddActivityModalOpened(false)} color="primary">
                ביטול
              </Button>
              <Button onClick={() =>  saveActivity()} color="primary" autoFocus>
                שמור
              </Button>
            </DialogActions>
          </Dialog>
          


          <Typography variant="h5" noWrap>
            תמונות, לוגו אגפי ורקעים
          </Typography>
          
          TODO: file upload
          <TextField id="rightLogo" fullWidth helperText="לוגו ימין" label="לוגו ימין" onChange={(e) => setForm({...form, rightLogo:e.target.value})}/>
          <TextField id="leftLogo" fullWidth helperText="לוגו שמאל" label="לוגו שמאל" onChange={(e) => setForm({...form, leftLogo:e.target.value})}/>
          <TextField id="backgroundImage" fullWidth helperText="תמונת רקע" label="תמונת רקע" onChange={(e) => setForm({...form, backgroundImage:e.target.value})}/>

          <Typography variant="h5" noWrap>
            שליחת תזכורות
          </Typography>

          <FormControlLabel label="שלח תזכורת שבוע לפני האירוע"
            control={ <Switch checked={form.send7DaysReminder} onChange={() => setForm({...form, send7DaysReminder: !form.send7DaysReminder})} name="send7DaysReminder" color="primary" /> }           
          />

          <FormControlLabel label="שלח תזכורת יומיים לפני האירוע"
            control={ <Switch checked={form.send2DaysReminder} onChange={() => setForm({...form, send2DaysReminder: !form.send2DaysReminder})} name="send2DaysReminder" color="primary" /> }           
          />

          <FormControlLabel label="שלח תזכורת בבוקר האירוע"
            control={ <Switch checked={form.sendMorningReminder} onChange={() => setForm({...form, sendMorningReminder: !form.sendMorningReminder})} name="sendMorningReminder" color="primary" /> }           
          />


          <Typography variant="h5" noWrap>
            פינישים אחרונים...
          </Typography>

          <TextField id="confirmationMessage" fullWidth helperText="ההודעה שתוצג למשתמש לאחר שאישר הגעה" label="הודעת אישור" multiline onChange={(e) => setForm({...form, confirmationMessage:e.target.value})}/>
          

          <Toolbar>
            <Button variant="contained" color="primary" onClick={submitEvent} disabled={!form.activities || form.activities.length === 0 } startIcon={<SaveIcon />}>שמור אירוע</Button>
          </Toolbar>

          <Json data={form}/>

      </MuiPickersUtilsProvider>
      
    </Paper>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Paper className={classes.paper}><EventView event={form}/></Paper>
      </Grid>

    </Grid>
  );
}