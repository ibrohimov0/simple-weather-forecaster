import { DotOutline } from "@phosphor-icons/react"
import GlassBox from "../../widgets/glassBox"
import "./style.css"
import getWeather from "../../shared/api/weather"

export default function CurrentWeather() {
    getWeather
    return (
        <GlassBox className="currentWeather">
            <h2>Tashkent</h2>
            <h1>28<DotOutline /></h1>
        </GlassBox>
    )
}