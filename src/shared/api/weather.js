import { axiosMain } from "./axiosInstance";

export default function getWeather(location) {
    return axiosMain.get(`/realtime`, {
        params: {location: `${location.lat},${location.lon}`}
    }).then(res => res.data).catch(err => {
        console.error("Weather fetch error:", err)
        throw err;
    })
}