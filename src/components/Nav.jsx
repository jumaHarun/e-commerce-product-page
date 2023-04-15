import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

function Nav() {
    const { cartState } = useContext(CartContext);

    const [isToggled, setIsToggled] = useState(false);

    const toggleNav = () => {
        setIsToggled(!isToggled);
    };

    return (
        <nav className="nav pall-1">
            <div className="container flex">
                <div className="nav-logo flex center-all">
                    <div className="ham-icon icon" onClick={toggleNav}>
                        <img src="\images\icon-menu.svg" alt="open menu" />
                    </div>

                    <div className="logo-img">
                        <img src="\images\logo.svg" alt="logo" />
                    </div>
                </div>

                <div className={isToggled ? 'nav-links' : 'nav-links hide'}>
                    <ul className="nav-list">
                        <div className="ham-close icon" onClick={toggleNav}>
                            <img
                                src="\images\icon-close.svg"
                                alt="close menu"
                            />
                        </div>

                        <li className="nav-item pbottom-1">
                            <a href="#" className="nav-link">
                                Collections
                            </a>
                        </li>
                        <li className="nav-item pbottom-1">
                            <a href="#" className="nav-link">
                                Men
                            </a>
                        </li>
                        <li className="nav-item pbottom-1">
                            <a href="#" className="nav-link">
                                Women
                            </a>
                        </li>
                        <li className="nav-item pbottom-1">
                            <a href="#" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item pbottom-1">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav-options flex center-all">
                    <div className="cart-icon icon">
                        <span className="icon-number bold">
                            {cartState.totalItems >= 0 && cartState.totalItems}
                        </span>
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
