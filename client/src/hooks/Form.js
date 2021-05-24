import { isPossiblePhoneNumber, isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
// isValidPhoneNumber('8 (800) 555-35-35', 'RU') === true

//////////////////////////////////
//TO BE USED BY THE useForm HOOK /
//////////////////////////////////
export class FormSchema{ 
    constructor(schema = {}){
        this.schema = schema;
    }

    addField(name, fieldInstance){
        this.schema[name] = fieldInstance;
    }

    toState(){
        let value = {};
        let validation = {};

        for(let field in this.schema){
            value[field] = this.schema[field].initialValue;
            validation[field] = this.schema[field].validationOutcome;
        }

        return {
            value:value,
            validation:validation,
            submitable: this.submitable
        };
    }

    validate(state){
        let outcomes = [];
        for(let field in this.schema){
            if(this.schema[field].validator){
                let outcome = this.schema[field].validate(state.value, field);
                state.validation[field] = outcome;
                outcomes.push(outcome);
            }
        }

        state.submitable = outcomes.every(outcome => outcome === null); //no validation errors
        
        return state;
    }
}

export class FieldSchema{
    constructor(validator = null, initialValue = null ,required = false, min = null, max = null, errorMessage = null, regex = /\d{9}/){ // value = null
        
        this.validator = validator;
        this.initialValue = initialValue;

        this.settings = {
            required:required,
            min:min,
            max:max,
            errorMessage:errorMessage,
            regex:regex
        };
    }

    validate(form, field){
        if(this.validator && form && field){
            let res = this.validator(form, field, this.settings);
            return res;
        }
        return null;
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    // All the validators should be static methods, since they are not part of the object
    // The reason why the whole form is injected into each validator is to do cross field validation - make the whole form transparent to each validator.
    // Custom validators can be added from outside this class, just keep the signature
    ////////////////////////////////////////////////////////////////////////////////////////
    static identityNumber(form, field, settings) {
        let id = form[field];
        id = String(id).trim();
        if(settings.required && id.length > 0){
            if (id.length > 9 || isNaN(id)) return settings.errorMessage || 'מספר ת"ז אינו תקין';
            id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
            let valid =  Array.from(id, Number).reduce((counter, digit, i) => {
                const step = digit * ((i % 2) + 1);
                return counter + (step > 9 ? step - 9 : step);
            }) % 10 === 0;
    
            if(!valid){
                return settings.errorMessage || 'מספר ת"ז אינו תקין';
            }
            return null;
        }
        return null;
    }

    static zipCode(form, field, settings) {
        //TODO: convert to regex
        let str = form[field];
        if((settings.required || str.trim().length > 0)){
            if(!(!isNaN(str) && (str.length == 5 || str.length == 7))){
                return settings.errorMessage || 'מיקוד אינו תקין';
            }
        }
        return null;
    }

    static regex(form, field, settings) {
        let str = form[field];
        if(settings.required && str.trim().length > 0 && !settings.regex.exec(str)){
            return settings.errorMessage || 'מידע שגוי';
        }
        return null;
    }

    static mobilePhone(form, field, settings) {
        let str = form[field];
        const res = parsePhoneNumber(str, 'IL');
    
        if(settings.required || str.length > 0){
            if (res !== undefined && res.isValid() && res.type == 'MOBILE'){ //FIXED-LINE
                return null;
            }else{
                return settings.errorMessage || 'מספר טלפון נייד אינו תקין';
            }
        }
        return null;
    }

    static landLinePhone (form, field, settings){
        let str = form[field];
        const res = parsePhoneNumber(str, 'IL');
    
        if(settings.required || str.length > 0){
            if (res !== undefined && res.isValid() && res.type == 'FIXED-LINE'){ //
                return null;
            }else{
                return settings.errorMessage || 'מספר טלפון קווי אינו תקין';
            }
        }
        return null;
        //return landLinePrefixes.some(prefix => str.startsWith(prefix)) && !isNaN(str) && str.length >= 9 && str.length < 11;
    }

    static text(form, field, settings) {
        if(settings.required && (!form[field] || form[field].trim().length == 0)){
            return 'שדה חובה';
        }
        
        if(form[field]){
            let s = form[field].trim();
            
            if(settings.min && s.length < settings.min){
                return settings.errorMessage || 'אורך מינמלי של טקסט הוא ' + settings.min + ' תווים';
            }
        
            if(settings.max && s.length > settings.max){
                return settings.errorMessage || 'אורך מקסימלי של טקסט הוא ' + settings.max + ' תווים';
            }
        }
    
        return null;
    }

    static number(form, field, settings){
        let str = form[field];
        if((settings.required || str.length > 0)){
            if(!isNaN(str)){
                return 'הטקסט אינו מספר תקני';
            }
    
            if(settings.min && parseInt(str) < settings.min){
                return 'ערך מינימלי נדרש הוא ' + settings.min;
            }
        
            if(settings.max && parseInt(str) > settings.max){
                return 'ערך מקסימלי נדרש הוא ' + settings.max;
            }
        }
        return null;
    }

    static email(form, field, settings){
        return FormSchema.regex(form, field, {...settings, errorMessage: 'כתובת דואר אלקטרוני אינה תקינה', regex:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/});
    }

    static datetime(form, field, settings){
        //use min max
        let d = form[field]
        if(d - settings.min < 0){
            return settings.errorMessage || 'התאריך קטן מתאריך המינימום';
        }

        if(settings.max - d < 0){
            return settings.errorMessage || 'התאריך גדול מתאריך המקסימום';
        }
        return null; //TODO
    }

    static file(form, field, settings){
        //TODO
    }

    static array(form, field, settings){
        let a = form[field];

        if((!a || a.length == 0) && settings.required){
            return settings.errorMessage || 'שדה חובה';
        }

        if(a || a.length > 0){
            if(a.length < settings.min){
                return settings.errorMessage || 'רשימה קצרה מהאורך המינימלי';
            }
    
            if(a.length > settings.max){
                return settings.errorMessage || 'רשימה ארוכה מהאורך המקסימלי';
            }
        }

        return null;
    }
}