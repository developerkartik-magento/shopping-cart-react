import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    return (

        <header className="header">
        <div className="logo"><Link to={"/"}>MyShop</Link></div>
        <nav>
            <ul className="nav-links">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Shop</Link></li>
                <li><Link to={"/categories"}>Categories</Link></li>
            
        {!isLoggedIn? (<li><Link to='/login'>Login</Link></li>) : (
            <>
                <li><Link to={"/logout"}>Logout</Link></li>
                <li><Link to={"/my-account"}>My Account</Link></li>
            </>
        )}
        </ul>
        </nav>
        <div className="cart">🛒</div>
    </header>
        
    )
}
export default Header;