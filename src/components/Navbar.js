import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";
import headerimage from "../assets/images/header.jpg";
import './Navbar.css';

const Navbar = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <div className="header">
                <img src={headerimage} alt="Header" />
            </div>

            <nav className="my-navbar">
                <ul className="navbar-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link position-relative" to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                                <path ule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                            </svg>
                            {cart.length > 0 && (
                                <span className="cart-badge">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/credit">Show Credit</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
