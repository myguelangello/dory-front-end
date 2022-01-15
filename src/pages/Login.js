import React, { useState } from "react";

import logo from '../assets/logo-negativa.svg';

import '../styles/login.css';

export function Login() {
    const [email, setEmail] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
    }

    return (
        <div className="content">
            <nav className="container">
                <img className="logo" src={logo} alt="Be The Hero" />

                <div className="nav-buttons">
                    <button className="default">Entrar</button>
                    <button className="yellow">Criar conta</button>
                </div>
            </nav>

            <section className="container">
            <form onSubmit={handleLogin}>
                <h1>Faça Login</h1>

                <div className="div-inputs">
                    <label for="email">E-mail</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Ex: alifernandes@gmail.com"
                    />

                    <div className="div-forgot-password">
                        <label for="password">Senha</label>
                        <label id="forgot-password">Esqueceu a senha?</label>
                    </div>
                    
                    <input
                        for="password"
                        type="password"
                        placeholder="Não escreva 123"
                    />
                </div>

                <button className="yellow" type="submit">
                    Entrar
                </button>

                <label className="sign-up">Não tenho conta</label>
            </form>
        </section>
        </div>
    )
       
       
}