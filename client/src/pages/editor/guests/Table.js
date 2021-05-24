import React, {useContext} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {Button, Typography} from '@material-ui/core';

import Json from '../../../components/Json';
import {FormSchema, FieldSchema} from '../../../hooks/Form';
import useForm from '../../../hooks/useForm';

import EventsContext from '../../../state/context';

export default function GuestTable(){
    const {state, dispatch} = useContext(EventsContext);
    
    let formSchema = new FormSchema({
        firstName: new FieldSchema(FieldSchema.text, '', true, 2, 10, null, null, null),
        lastName: new FieldSchema(FieldSchema.text, '', false, null, null, null, null, null),
        identityNumber: new FieldSchema(FieldSchema.identityNumber, '',true, null, null, null, null, null)
    });

    const [form, updateForm] = useForm(formSchema);
    return(
        <>
            <Typography variant="h1" noWrap>
                טבלת מוזמנים
            </Typography>

            <h4>firstName</h4>
            <input type="text" name="firstName" value={form.value.firstName} onChange={(e) => updateForm('firstName', e.target.value)} />
            <label>{form.validation.firstName}</label>

            <h4>lastName</h4>
            <input type="text" name="lastName" value={form.value.lastName} onChange={(e) => updateForm('lastName', e.target.value)} />
            <label>{form.validation.lastName}</label>

            <h4>identityNumber</h4>
            <input type="text" name="identityNumber" value={form.value.identityNumber} onChange={(e) => updateForm('identityNumber', e.target.value)} />
            <label>{form.validation.identityNumber}</label>

            <br/>
            <br/>
            submitable: {form.submitable ? 'Yes' : 'No'}
            
            <br/>
            <br/>
            <Json data={form}/>
        </>
    )
} 