import axios from 'axios';

export const axiosMain = axios.create({
  baseURL: process.env.REACT_APP_TOMORROWIO_API,
  params: {
    apikey: process.env.REACT_APP_TOMORROWIO_API_KEY,
  }
})

export const axiosSecond = axios.create({
  baseURL: process.env.REACT_APP_OPENWEATHER_API,
  params: {
    appId: process.env.REACT_APP_OPENWEATHER_API_KEY,
  }
})