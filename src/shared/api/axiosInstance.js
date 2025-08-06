import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.WEATHER_API,
  params: {
    appId: process.env.WEATHER_API_KEY,
    units: "metric",
    lang: "en"
  }
})
