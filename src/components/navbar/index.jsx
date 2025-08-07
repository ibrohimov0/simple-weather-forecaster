import { MapPin, Sun } from "@phosphor-icons/react"
import "./style.css"
import GlassBox from "../../widgets/glassBox"

export default function Navbar() {
    return (
        <div className="container">
            <GlassBox className="navbar">
                <h1>Weather</h1>
                <span>
                    <button>
                        <MapPin weight="bold" className="icon" />
                        <h2>Tashkent</h2>
                    </button>
                    <button>
                        <Sun weight="bold" className="icon" />
                    </button>
                </span>
            </GlassBox>
        </div>
    )
}