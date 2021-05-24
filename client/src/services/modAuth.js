import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_HOST}/auth/`;
const REFRESH_TOKEN_INTERVAL = 0;

const getRefreshToken = () => {
    console.log('[Getting refresh token]');
    axios.post(API_URL + "refresh", {
      "token":"token"
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        //TODO: store the token and all user data not on localstorage, but on context
      }
    });
}

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        REFRESH_TOKEN_INTERVAL = setInterval(getRefreshToken, parseInt(process.env.REACT_APP_REFRESH_TOKEN_INTERVAL) * 60 * 1000);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  clearInterval(REFRESH_TOKEN_INTERVAL);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  login,
  logout,
  getCurrentUser,
};