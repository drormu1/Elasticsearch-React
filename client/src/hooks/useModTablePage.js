import React, { useState, useEffect } from 'react';
import useModApi from './useModApi';

export default function useModTablePage(entityName, query, page, pageSize, filter) {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const apiClient = useModApi();
    apiClient
    .get(`/api/${entityName}/page?query=${query}&page=${page}&pageSize=${pageSize}&filter=${filter}`)
    .then(res => setPageData(res));
  },[schema])
}