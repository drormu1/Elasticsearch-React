import React, { useState, useEffect } from 'react';
import useModApi from './useModApi';

export default function useModEntity(entityName) {
  const [schema, setSchema] = useState(null);
  //EACH GET ENTITY WILL RETURN HINTS FOR WHAT IS FIELDS CAN BE EDITED OR NOT BY THE USER AND WHICH ACTIONS CAN BE PERFORMED
  //THE RESPONSE WILL LOOK LIKE {data:{}, schema:{}}
  //THE CLIENT MAY OR MAY NOT USE THE PROVIDED SCHEMA

  useEffect(() => {
    const apiClient = useModApi();
    apiClient
    .get(`/api/${entityName}/_shcema`)
    .then(res => setSchema(res));
  },[schema])
}