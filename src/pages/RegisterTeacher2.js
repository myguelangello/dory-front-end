import React, { useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import RadioButton from "../components/RadioButton";
import Input from "../components/Input";

import '../styles/registerStudent.css';

export function RegisterTeacher2() {
    const [page, setPage] = useState(1);
    const handleChange = (e, value) => {
        setPage(value);
    }

    return (
        <div>
            <NavBarGlobal />

            <section className="container" id="register-student">
                <form onSubmit={() => {}}>
                    <h1>Sobre pesquisa</h1>
                        <div className="columns-inputs">
                            <div className="div-inputs">
                                <Input
                                    name="areas-pesquisa"
                                    question="Quais são suas áreas de pesquisa?"
                                    required="required"
                                    type="text"
                                    placeholder="+ Adicionar área de pesquisa"
                                />

                                <Input
                                    name="projetos-pesquisa"
                                    question="Quais projetos de pesquisa você participa?"
                                    required="required"
                                    type="text"
                                    placeholder="+ Adicionar projeto de pesquisa"
                                />
                                <div id="nao-sei">
                                    <RadioButton
                                        name="nao-participa" 
                                        question="Não participo de nenhum"
                                    />
                                </div>
                            </div>

                            <hr  id="line-page-2-1" />

                            <div className="div-inputs">
                                <Input
                                    name="projetos-extensao"
                                    question="Quais projetos de extensão você participa?"
                                    required="required"
                                    type="text"
                                    placeholder="+ Adicionar projeto de extensão"
                                />
                                <div id="nao-sei">
                                    <RadioButton
                                        name="nao-participa" 
                                        question="Não participo de nenhum"
                                    />
                                </div>

                                <Input
                                    name="disciplinas"
                                    question="Quais disciplinas do SMD você leciona?"
                                    required="required"
                                    type="text"
                                    placeholder="+ Adicionar disciplinas do SMD"
                                />
                            </div>
                        </div>
                                                    
                    <div className="div-buttons">
                        <button className="default">
                            Cancelar
                        </button>

                        <button className="yellow" type="submit">
                            Salvar
                        </button> 
                    </div>
                </form>
            </section>
        </div>
    )      
}