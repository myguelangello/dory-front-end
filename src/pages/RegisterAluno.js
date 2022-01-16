import React from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

import add from './../assets/icons/add.svg';

import '../styles/registerAluno.css';

export function RegisterAluno() {
    return (
        <div className="content">
            <NavBarGlobal />

            <section className="container">
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

                        <hr />

                        <div className="div-inputs">
                            <TextArea
                                name="Sobre você"
                                question="Conte-me sobre você em um tweet"
                                placeholder="Ex: Sou apaixonada por design.."
                            />

                            <Input
                                name="Sobrenome"
                                question="Quais são seus interesses em pesquisa?"
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