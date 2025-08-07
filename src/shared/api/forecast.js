import { axiosMain } from "./axiosInstance";

export default function getForecast(location) {
    return axiosMain.get(`/forecast`, {
        params: {location: `${location.lat},${location.lon}`}
    }).then(res => res.data).catch(err => {
        console.error("Weather fetch error:", err)
        throw err;
    })
}