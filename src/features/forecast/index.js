import { useQuery } from "@tanstack/react-query"
import getForecast from "../../shared/api/forecast"

export const useForecast = (location) => {
    return useQuery({
        queryKey: ["forecast",location],
        queryFn: () => getForecast(location),
        enabled: !!location
    })
}