import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function useForm(settings) {

  // let prestineValidationState = {};
  // let prestineFormModel = {};
  
  // for(key in Object.keys(settings)){
  //   prestineFormModel[key] = settings[key].value;
  //   prestineValidationState[key] = null;
  // }

  // const [formModel, setFormModel] = useState({...prestineFormModel});
  // const [validationState, setValidationState] = useState({...prestineValidationState});
  
  // const setField = (field, value) => {
  //   if(settings[field].validator){
  //     setValidationState({...validationState, field:settings[field].validator(value)})
  //   }
  //   setFormModel({...formModel, field:value});
  // }
  // return [formModel, setField, validationState];
}