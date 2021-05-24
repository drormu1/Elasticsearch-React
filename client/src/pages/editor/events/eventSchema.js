import Joi from 'joi';

import {textSchema} from '../../../schemas/objects/commonValidators';

export default Joi.object().keys({
    'id':guideSchema
    'name': textSchema.required(),
    'description': textSchema.required(),
    'fromDate':null,
    'toDate':null,
    'registerationOpenFromDate':null,
    'registerationOpenToDate':null,
    'leftLogo':null,
    'rightLogo':null,
    'backgroundImage':null,
    'guestAdGroups':[],
    'activities':[],
    'sendMorningReminder':false,
    'send2DaysReminder':false,
    'send7DaysReminder':false,
    'confirmationMessage':null,
});

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