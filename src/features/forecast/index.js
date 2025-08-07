import { useQuery } from "@tanstack/react-query"
import getForecast from "../../shared/api/forecast"
import { useEffect, useState } from "react";

export const useForecast = () => {
    const [location, setLocation] = useState(() => {
        return JSON.parse(localStorage.getItem("location"));
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const newLoc = JSON.parse(localStorage.getItem("location"));
            setLocation(prev => {
                if (
                    !prev ||
                    !newLoc ||
                    prev.lat !== newLoc.lat ||
                    prev.lon !== newLoc.lon
                ) {
                    return newLoc
                }
                return prev
            })
        })
        return () => clearInterval(interval)
    }, 1000)
    return useQuery({
        queryKey: ["forecast", location],
        queryFn: () => getForecast(location),
        enabled: !!location
    })
}