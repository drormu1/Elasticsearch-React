import Joi from 'joi';
import parsePhoneNumber from 'libphonenumber-js';

//////////////////////////////////////////////////////////////////////////////////////////////////
// https://dev.to/pestrinmarco/partial-and-complete-validation-of-the-form-with-joi-on-react-578e
//////////////////////////////////////////////////////////////////////////////////////////////////

const isValidMobilePhoneNumber = (phoneNumber, helper) => {
    const res = parsePhoneNumber(phoneNumber, 'IL');
    if (res !== undefined && res.isValid() && res.type == 'MOBILE'){ //fixed-line, mobile
        return phoneNumber;
    }
    return helper.error('phoneNumber.invalid');
};

const isValidFixedLinePhoneNumber = (phoneNumber, helper) => {
    const res = parsePhoneNumber(phoneNumber, 'IL');
    if (res !== undefined && res.isValid() && res.type == 'FIXED-LINE'){ //fixed-line, mobile
        return phoneNumber;
    }
    return helper.error('phoneNumber.invalid');
};


export const mobilePhoneNumberSchema = Joi.string().custom(isValidMobilePhoneNumber);
export const fixedLinePhoneNumberSchema = Joi.string().custom(isValidFixedLinePhoneNumber);
export const textSchema = Joi.string();
export const numberSchema = Joi.number().custom(isValidFixedLinePhoneNumber);
export const guidSchema = Joi.guid();
export const optionSchema = Joi.object({key: Joi.string(), value: Joi.string()});