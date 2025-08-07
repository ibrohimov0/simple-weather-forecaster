import { useQuery } from "@tanstack/react-query"
import getWeather from "../../shared/api/weather"

export const useWeather = () => {
    const location = JSON.parse(localStorage.getItem("location"));
    return useQuery({
        queryKey: ["weather",location],
        queryFn: () => getWeather(location),
        enabled: !!location
    })
}