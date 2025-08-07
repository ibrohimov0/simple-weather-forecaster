import { DotOutline, MapPin } from "@phosphor-icons/react"
import GlassBox from "../../widgets/glassBox"
import "./style.css"
import { useForecast } from "../../features/forecast";
import Loader from "../../shared/ui/loader";
import Error from "../../shared/ui/error/error";
import CurrentCity from "../../features/cityName";

export default function ForecastWeather() {
    const { isLoading, error, data } = useForecast();
    return (
        <GlassBox className="forecastWeather">
            {data && <>
                <span>
                    <h1>Forecast</h1>
                    <CurrentCity/>
                </span>
                <ul>
                    {data?.timelines?.daily?.map(e =>
                        <li>
                            <h3>{new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(e?.time))}</h3>
                            <h2>{Math.round(e?.values?.temperatureAvg)}<DotOutline /></h2>
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