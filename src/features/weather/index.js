import { useQuery } from "@tanstack/react-query"
import getWeather from "../../shared/api/weather"

export const useWeather = (city) => {
    return useQuery({
        queryKey: ["weather",city],
        queryFn: () => getWeather(city),
        enabled: !!city
    })
}