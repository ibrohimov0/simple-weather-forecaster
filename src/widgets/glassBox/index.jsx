import "./style.css"

export default function GlassBox({children,className}) {
    return(
        <div className={`glassBox ${className}`}>
            {children}
        </div>
    )
}