import { useQuery } from "@tanstack/react-query"
import getWeather from "../../shared/api/weather"
import { useState, useEffect } from "react"

export const useWeather = () => {
    const [location, setLocation] = useState(() => {
        return JSON.parse(localStorage.getItem("location"));
    });

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
                    return newLoc;
                }
                return prev;
            })
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return useQuery({
        queryKey: ["weather", location],
        queryFn: () => getWeather(location),
        enabled: !!location,
    });
}
