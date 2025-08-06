import { axiosInstance } from "./axiosInstance";

export default function getForecast(city) {
    return axiosInstance.get(`/data/2.5/forecast`, {
        params: { q: city }
    }).then(res => res.data).catch(err => {
        console.error("Weather fetch error:", err)
        throw err;
    })
}