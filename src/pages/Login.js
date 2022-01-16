import React from "react";

import '../styles/login.css';

import NavBar from "../components/NavBarNoLogin";
import Input from "../components/Input";

export function Login() {
    return (
        <div>
            <NavBar />

            <section className="container" id="login">
                <form onSubmit={() => {}}>
                    <h1>Faça Login</h1>

                    <div className="div-inputs">
                        <Input 
                            name="email"
                            type="email"
                            question="Email"
                            required="required"
                            placeholder="Ex: alifernandes@gmail.com"
                        />

                        <div className="div-forgot-password">
                            <div className="label-required">
                                <label for="password">Senha</label>
                                <label id="required">*</label>
                            </div>
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