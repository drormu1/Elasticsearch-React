import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function useModApi(method, endpoint, payload, doneHandler) {
  // const [isOnline, setIsOnline] = useState(null);

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }

  //   ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
  //   return () => {
  //     ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
  //   };
  // });

  const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-type": "application/json"
    }
  });

  return api;
}