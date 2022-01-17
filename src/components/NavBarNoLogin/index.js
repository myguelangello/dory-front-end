import React from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/logo-negativa.svg';

import './style.css';

export default function NavBar() {
    return (
        <nav className="container">
            <img className="logo" src={logo} alt="Dory" />

            <div className="nav-buttons">
                <Link to="/" className="default">Entrar</Link>
                <Link to="/register" className="yellow">Criar conta</Link>
            </div>
        </nav>
    )
}