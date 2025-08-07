import { useQuery } from "@tanstack/react-query"
import getWeather from "../../shared/api/weather"

export const useWeather = () => {
    const city  = localStorage.getItem("city");
    return useQuery({
        queryKey: ["weather",city],
        queryFn: () => getWeather
    })
}