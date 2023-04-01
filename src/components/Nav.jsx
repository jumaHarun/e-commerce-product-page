function Nav() {
    return (
        <nav className="nav pall-1">
            <div className="container flex">
                <div className="nav-logo flex center-all">
                    <div className="ham-icon icon">
                        <img src="\images\icon-menu.svg" alt="menu" />
                    </div>

                    <div className="logo-img">
                        <img src="\images\logo.svg" alt="logo" />
                    </div>
                </div>

                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Collections
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Men
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Women
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="nav-options flex center-all">
                    <div className="cart icon">
                        <img src="\images\icon-cart.svg" alt="cart" />
                    </div>

                    <div className="user icon">
                        <img src="\images\image-avatar.png" alt="User" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
