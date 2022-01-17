import React, { useState } from "react";
import Modal from "react-modal";

import NavBarGlobal from "../components/NavBarGlobal";
import RadioButton from "../components/RadioButton";
import Input from "../components/Input";

import '../styles/registerStudent.css';

Modal.setAppElement('#root');

export function RegisterTeacher2() {
    const [modalIsOpen, setIsOpen] = useState(false);


    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    return (
        <div>
            <NavBarGlobal />

            <section className="container" id="register-student">
            <button className="modal-button" onClick={handleOpenModal}>
                                    Modal
                                </button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={handleCloseModal}
                                    style={customStyles}
                                >
                                    <h2>Hello</h2>
                                    <button onClick={handleCloseModal}>Close</button>
                                </Modal>
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