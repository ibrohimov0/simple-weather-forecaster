import { DotOutline, MapPin } from "@phosphor-icons/react"
import GlassBox from "../../widgets/glassBox"
import "./style.css"
import { useForecast } from "../../features/forecast";
import Loader from "../../shared/ui/loader";
import Error from "../../shared/ui/error/error";
import CurrentLocation from "../../features/currentLocation";

export default function ForecastWeather() {
    const {location ,isError} = CurrentLocation();
    const { isLoading, error, data } = useForecast(location);
    console.log(data);


    return (
        <GlassBox className="forecastWeather">
            {data && <>
                <span>
                    <h1>Forecast</h1>
                    <h2>{data?.city?.name}</h2>
                </span>
                <ul>
                    {data?.list.map(e =>
                        <li>
                            <h3>{new Date(e?.dt_txt).toLocaleDateString('en-US',{day: "2-digit",month: "long"})}</h3>
                            <h4>{e?.weather?.map(weather => weather?.main)}</h4>
                            <h2>{Math.round(e?.main?.temp-273)}<DotOutline /></h2>
                        </li>
                    )}
                </ul>
            </>
            }
            {isLoading && <Loader />}
            {error && <Error />}
        </GlassBox>
    )
}