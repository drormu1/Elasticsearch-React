import React, { useState, useEffect, useContext } from 'react';

import EventsContext from '../state/context';

export default function useForm(formSchema) {
  const {state, dispatch} = useContext(EventsContext);
  const [form, setForm] = useState(formSchema.toState());

  const updateForm = (fieldName, value) => {
    setForm((prevState) => {
      let p = {...prevState, value:{...prevState.value}, validation:{...prevState.validation}};
      p.value[fieldName] = value;
      
      let outcome = formSchema.validate(p);
      
      console.log(outcome);
      p.validation[fieldName] = outcome.validation[fieldName];
      p.submitable = outcome.submitable;
      
      return p;
    });
  }
  return [form, updateForm];
}