import { axiosSecond } from "./axiosInstance";

export default function getCityName(location) {
    return axiosSecond.get(`/geo/1.0/reverse`, {
        params: {format: "json",lat: location.lat,lon: location.lon}
    }).then(res => res.data).catch(err => {
        console.error("Weather fetch error:", err)
        throw err;
    })
}