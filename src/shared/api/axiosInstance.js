import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API,
  params: {
    appId: process.env.REACT_APP_WEATHER_API_KEY,
  }
})
