import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export class Navbar extends Component {
    static propTypes = {};
    
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
                <div className="container">
                <Link className="navbar-brand" to="/blog">
                    Tech Tea
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                        Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/general">
                        general
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/business">
                        business
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">
                        entertainment
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/science">
                        science
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/technology">
                        technology
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/health">
                        health
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sports">
                        sports
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
