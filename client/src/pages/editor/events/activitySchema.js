import Joi from 'joi';

import {textSchema} from '../../../schemas/objects/commonValidators';

export default Joi.object().keys({
    'name': textSchema.required(),
    'description': surnameSchema,
    'phoneNumber':phoneNumberSchema
});

id: -1,
order:-1,
startAt:null,
endAt:null,
name:'',
description:'',
backgroundImage:null,
subscriptable:false,
maxGuests:null