import { useEffect, useState } from "react";

export default function CurrentLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (postion) => {
                    setLocation({
                        lat: postion.coords.latitude,
                        lon: postion.coords.longitude,
                    })
                },
                (err) => {
                    setError(err.message);
                }
            )
        } else{
            setError("Geolocation is not supported.");
        }
    },[])
    return { location, error };
}