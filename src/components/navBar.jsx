import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="nav d-flex justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="/">
                    Main
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">
                    Users
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
