import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import chalk  from "chalk";
import SearchContext from '../state/context';

export default function useApi(){
  
  const {state, dispatch} = useContext(SearchContext);
    
  const serverUrl = 'http://localhost:3001/';

  const client = axios.create({
    baseURL: serverUrl,
    timeout: 505000,
    headers: {
      "Content-type": "application/json" 
    }
  });

  
  const autocomplete = () => {
    //console.log('call init');
    //var queryString = `term=${term}&activeIndex=${activeIndex}`;
   
    return client.get('/autocomplete', {
      params: {
        term : state.term,
        activeIndex:state.term
      }
    })
    .then((response) => {
       console.log(response.data);
      return response.data;
    })
    .catch((err) => 
    {
      chalk.bgRed.red(err);
      return [];
    });
  }
  
  return {autocomplete};
}