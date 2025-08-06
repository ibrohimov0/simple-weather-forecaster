import { axiosInstance } from "./axiosInstance";

export default function getWeather(city) {
    return axiosInstance.get(`/data/2.5/weather`, {
        params: { q: city }
    }).then(res => res.data).catch(err => {
        console.error("Weather fetch error:", err)
        throw err;
    })
}