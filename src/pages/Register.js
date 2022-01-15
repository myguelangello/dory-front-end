import React, { useState } from "react";

import NavBar from "../components/NavBarNoLogin";
import Input from "../components/Input";
import RadioButton from "../components/RadioButton";

import '../styles/register.css';

export function Register() {
    const [email, setEmail] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
    }

    return (
        <div className="content">
            <NavBar />

            <section className="container">
            <form onSubmit={handleLogin}>
                <h1>Crie sua conta</h1>

                <div className="div-inputs">
                    <Input
                        name="Nome"
                        type="text"
                        placeholder="Ex: Alissa"
                    />

                    <Input
                        name="Sobrenome"
                        type="text"
                        placeholder="Ex: Fernandes"
                    />

                    <Input
                        name="Email"
                        type="text"
                        placeholder="Ex: alifernandes@gmail.com"
                    />

                    <Input
                        name="Senha"
                        type="password"
                        placeholder="Não escreva 123"
                    />

                    <div className="label-required">
                        <label for="perfil">Qual é seu perfil?</label>
                        <label id="required">*</label>
                    </div>
                    <div>
                        <RadioButton 
                            name="Aluno"
                        />
                        <RadioButton 
                            name="Professor"
                        />
                    </div>
                    
                </div>

                <button className="yellow" type="submit">
                    Criar minha conta
                </button>

                <label className="sign-up">Já tenho conta</label>
            </form>
        </section>
        </div>
    )
       
       
}