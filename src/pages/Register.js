import React from "react";

import NavBar from "../components/NavBarNoLogin";
import Input from "../components/Input";
import RadioButton from "../components/RadioButton";

import '../styles/register.css';

export function Register() {
    return (
        <div>
            <NavBar />

            <section className="container" id="register">
                <form onSubmit={() => {}}>
                    <h1>Crie sua conta</h1>

                    <div className="div-inputs">
                        <Input
                            name="Nome"
                            type="text"
                            question="Nome"
                            required="required"
                            placeholder="Ex: Alissa"
                        />

                        <Input
                            name="Sobrenome"
                            type="text"
                            question="Sobrenome"
                            required="required"
                            placeholder="Ex: Fernandes"
                        />

                        <Input
                            name="Email"
                            type="email"
                            question="Email"
                            required="required"
                            placeholder="Ex: alifernandes@gmail.com"
                        />

                        <Input
                            name="Senha"
                            type="password"
                            question="Senha"
                            required="required"
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