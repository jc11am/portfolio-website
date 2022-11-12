import { useContext } from "react"
import { ToggleContext } from "../../context/toggleContext"
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import "./toggle.css"

const Toggle = () => {
    const theme = useContext(ToggleContext)
    const { darkMode, dispatch } = theme

    const change = () => {
        dispatch({ type: "TOGGLE"});
    };

    return (
        <div className="t">
            <img src={Sun} alt="" className="t-icon"/>
            <img src={Moon} alt="" className="t-icon"/>
            <div onClick={change} className="t-button" style={{ left: darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle