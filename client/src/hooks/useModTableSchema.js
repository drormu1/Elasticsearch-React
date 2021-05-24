import React, { useState, useEffect } from 'react';
import useModApi from './useModApi';

export default function useModTableSchema(entityName) {
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    const apiClient = useModApi();
    apiClient
    .get(`/api/${entityName}/_shcema`)
    .then(res => setSchema(res));
  },[schema])
}