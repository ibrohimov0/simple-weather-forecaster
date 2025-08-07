import { DotOutline, MapPin } from "@phosphor-icons/react"
import GlassBox from "../../widgets/glassBox"
import "./style.css"

export default function ForecastWeather() {
    return (
        <GlassBox className="forecastWeather">
            <span>
                <h1>Forecast</h1>
                <h2>Tashkent</h2>
            </span>
            <ul>
                <li>
                    <h3>Today</h3>
                    <h2>28<DotOutline /></h2>
                </li>
                <li>
                    <h3>Tuesday</h3>
                    <h2>29<DotOutline /></h2>
                </li>
                <li>
                    <h3>Wednesday</h3>
                    <h2>29<DotOutline /></h2>
                </li>
                <li>
                    <h3>Thursday</h3>
                    <h2>29<DotOutline /></h2>
                </li>
                <li>
                    <h3>Friday</h3>
                    <h2>29<DotOutline /></h2>
                </li>
                <li>
                    <h3>Saturday</h3>
                    <h2>29<DotOutline /></h2>
                </li>
            </ul>
        </GlassBox>
    )
}