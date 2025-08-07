import CurrentWeather from "../../components/currentWeather"
import ForecastWeather from "../../components/forecastWeather"
import "./style.css"

export default function HomePage() {
    return (
        <div className="container">
            <div className="homePage">
                <CurrentWeather />
                <ForecastWeather />
            </div>
        </div>
    )
}