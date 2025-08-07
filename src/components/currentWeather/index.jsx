import { DotOutline } from "@phosphor-icons/react"
import GlassBox from "../../widgets/glassBox"
import "./style.css"
import { useWeather } from "../../features/weather";
import Loader from "../../shared/ui/loader";
import Error from "../../shared/ui/error/error";

export default function CurrentWeather() {
    const { isLoading, error, data } = useWeather("tashkent");
    return (
        <GlassBox className="currentWeather">
            {data &&
                <>
                    <h2>{data?.name}</h2>
                    <span>
                        <h2>{data?.weather?.map(e => e.main)}</h2>
                        <h1>{Math.round(data?.main?.temp - 273)}<DotOutline /></h1>
                    </span>
                </>
            }
            {isLoading && <Loader />}
            {error && <Error />}
        </GlassBox>
    )
}