const Header = () => {
    return (
        <header className="header">
        <div className="logo">MyShop</div>
        <nav>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">My Account</a></li>
            </ul>
        </nav>
        <div className="cart">🛒</div>
    </header>

    )
}
export default Header;