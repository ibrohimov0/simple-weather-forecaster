import { MapPin, Sun } from "@phosphor-icons/react"
import "./style.css"
import GlassBox from "../../widgets/glassBox"
import CurrentCity from "../../features/cityName"
import ChangeTheme from "../../features/theme"

export default function Navbar() {
    return (
        <div className="container">
            <GlassBox className="navbar">
                <h1>Weather</h1>
                <span>
                    <button>
                        <MapPin weight="bold" className="icon" />
                        <CurrentCity />
                    </button>
                    <ChangeTheme/>
                </span>
            </GlassBox>
        </div>
    )
}