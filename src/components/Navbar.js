import { Link } from "react-router-dom";
import React, { Component } from "react";

export class Navbar extends Component {

    
    render() {
        return (
            <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
                <div className="container">
                <Link className="navbar-brand text-2xl" to="/"> News Hunt </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-end" id="navbarNav">
                    <ul className="navbar-nav space-x-3">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">News Categories</Link>
                    <ul className="dropdown-menu" style={{backgroundColor: "#212529"}} aria-labelledby="navbarDropdown">
                    <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                </ul>
            </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                        About Us
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            </>
        );
    }
}

export default Navbar;
