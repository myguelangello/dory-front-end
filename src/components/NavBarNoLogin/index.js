import React from "react";

import logo from '../../assets/logo-negativa.svg';

import './style.css';

export default function NavBar() {
    return (
        <nav className="container">
            <img className="logo" src={logo} alt="Be The Hero" />

            <div className="nav-buttons">
                <button className="default">Entrar</button>
                <button className="yellow">Criar conta</button>
            </div>
        </nav>
    )
}