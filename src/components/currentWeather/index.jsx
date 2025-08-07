import { DotOutline } from "@phosphor-icons/react"
import GlassBox from "../../widgets/glassBox"
import "./style.css"
import { useWeather } from "../../features/weather";
import Loader from "../../shared/ui/loader";
import Error from "../../shared/ui/error/error";
import CurrentCity from "../../features/cityName";

export default function CurrentWeather() {
    const { isLoading, error, data } = useWeather();
    return (
        <GlassBox className="currentWeather">
            {data &&
                <>
                    <CurrentCity/>
                    <span>
                        <h2>Today</h2>
                        <h1>{Math.round(data?.data?.values?.temperature)}<DotOutline /></h1>
                    </span>
                </>
            }
            {isLoading && <Loader />}
            {error && <Error />}
        </GlassBox>
    )
}