import { Moon, Sun } from "@phosphor-icons/react";
import { useState } from "react";

export default function ChangeTheme() {
    const [theme,setTheme] = useState();
    const changeTheme = () => {
        const currentTheme = theme === "dark" ? "light" : "dark"
        document.documentElement.setAttribute("data-theme",currentTheme)
        setTheme(currentTheme)
        window.localStorage.setItem("theme",currentTheme)
    }
    return (
        <button onClick={changeTheme}>
            {theme === "dark" ? 
                <Sun weight="bold" className="icon" />
            :
                <Moon weight="bold" className="icon"/>
            }
        </button>
    )
}