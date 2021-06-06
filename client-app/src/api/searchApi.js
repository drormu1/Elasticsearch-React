import axios from "axios";


const serverUrl = 'http://localhost:3001/';

const client = axios.create({
  baseURL: serverUrl,
  timeout: 1000,
  headers: {
    "Content-type": "application/json" 
  }
});

const initCall = () => {
    console.log('call init');
    return client.get('/init')
    .then((response) => {
       console.log(response.data);
      return response.data;
    })
    .catch((err) => 
    {
      console.log(err);
    });
}

async function initCall2() {
  try {
  
    const response = await client.get('/init');;
    return (response.data);
  } catch (error) {
    console.error(error);
  } 
}

export  {
  initCall,
  serverUrl,
    //autocomlete,
  };