import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavBarGlobal from "../components/NavBarGlobal";
import CardProfessor from "../components/CardProfessor";
import ButtonNav from "../components/ButtonNav";
import MenuProfessores from "../components/MenuProfessores";

import search from '../assets/icons/search-gray.svg';
 
import '../styles/home.css';

export function Home() {
    const [professores, setProfessores] = useState(true);
    const [alunos, setAlunos] = useState(false);

    const srcPerfil = "https://images.pexels.com/photos/7163364/pexels-photo-7163364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const interesses = [
        'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho' 
    ]

    const handleSetProfessores = () => {
        setProfessores(true);
        setAlunos(false)
    }
    const handleSetAlunos = () => {
        setAlunos(true);
        setProfessores(false);
    } 

    console.log(professores, alunos);

    const listProfessores = [
        {
            id: 0,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        },
        {
            id: 1,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        },
        {
            id: 2,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        }
    ]

    return (
        <div>
            <NavBarGlobal />

            <section className="container" id="home">
                <div className="interesses-container">
                    <p>Seus interesses</p>
                    <ul className="interesses-list-tags">
                        { interesses.map((inter, index) => <li key={index}>{inter}</li>)}
                    </ul>
                </div>

                <div className="input-container">
                    <button>
                        <img className="search-icon" src={search} alt="Ícone de pesquisa" />
                    </button>
                    
                    <input 
                        className="input-search"
                        name="search"
                        type="text"
                        placeholder="Pesquise sobre um orientador..."
                    />
                </div>

                <div className="resultados-container">
                    <div className="item-resultado">
                        <h1>{interesses[1]}</h1>

                        <div className="nav-filtros">
                            <ButtonNav 
                                setStatus={handleSetProfessores}
                                name="Professores"
                            />

                            <ButtonNav 
                                setStatus={handleSetAlunos}
                                name="Alunos"
                            />
                            <hr /> 
                        </div>

                        <MenuProfessores 
                            status={professores}
                            professores={listProfessores}
                        />
                    </div>
                </div>
            </section>
        </div>
    )      
}