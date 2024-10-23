import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {

    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus();
    useEffect(() => { }, [setBtnName])

    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>onlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About Us</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName} </button>
                </ul>
            </div>

        </div>
    )
}

export default Header;