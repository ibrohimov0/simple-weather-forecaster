import { axiosInstance } from "./axiosInstance";

export default function getForecast(location) {
    return axiosInstance.get(`/data/2.5/forecast/daily`, {
        params: { lat: location.lat,lon:location.lon }
    }).then(res => res.data).catch(err => {
        console.error("Weather fetch error:", err)
        throw err;
    })
}