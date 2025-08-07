import { useQuery } from "@tanstack/react-query";
import getCityName from "../../shared/api/cityName";

export default function CurrentCity() {
    const location = JSON.parse(localStorage.getItem("location"));
    const { data, isLoading, isError } = useQuery({
        queryKey: ["reverse", location],
        queryFn: () => getCityName(location),
        enabled: !!location,
    });

    if (isLoading || isError) return null;

    const city = data?.[0]?.name || "Unknown";
    return <h2>{city}</h2>;
};
