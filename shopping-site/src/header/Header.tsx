const Header = () => {
    return (
        <header>
            <div className="container">
            <div className="header">
                <div className="logo"><img src="images/logo.png" /></div>
                <div className="menu"><a href="#menu" className="openicon">☰</a>
                <nav id="menu">
                    <a href="#" className="closeicon">✕</a>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Shop Now</li>
                        <li>Category</li>
                        <li>Register</li>
                        <li>Contact us</li>
                    </ul>
                </nav>
                </div>
            </div>
            </div>
        </header>

    )
}
export default Header;