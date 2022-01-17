import React, { useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

import add from './../assets/icons/add.svg';

import '../styles/registerStudent.css';

export function RegisterStudent1() {
    const [page, setPage] = useState(1);
    const handleChange = (e, value) => {
        setPage(value);
    }

    return (
        <div>
            <NavBarGlobal />

            <section className="container" id="register-student">
                <form onSubmit={() => {}}>
                    <h1>Identificação</h1>
                        <div className="columns-inputs">
                            <div className="div-inputs perfil">
                                <div className="add-perfil">
                                    <div className="label-add-perfil">
                                        <label>Adicione sua foto de perfil</label>
                                    </div>
                                    <button>
                                        <img className="add-icon" src={add} alt="Ícone de adicionar" />
                                    </button>
                                </div>
                                
                                <h4>Alissa Fernandes</h4>
                                <p>alifernandes@gmail.com</p>
                            </div>

                            <hr  id="line-page-1" />

                            <div className="div-inputs">
                                <TextArea
                                    name="Sobre você"
                                    question="Conte-me sobre você em um tweet"
                                    placeholder="Ex: Sou apaixonada por design.."
                                />

                                <Input
                                    name="Interesses"
                                    question="Quais são seus interesses em pesquisa?"
                                    required="required"
                                    type="text"
                                    placeholder="+ Adicionar área de interesse"
                                />
                            </div>
                        </div>
                                                    
                    <div className="div-buttons">
                        <button className="default">
                            Cancelar
                        </button>

                        <button className="yellow" type="submit">
                            Continuar
                        </button> 
                    </div>
                </form>
            </section>
        </div>
    )      
}