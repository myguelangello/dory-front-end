import React from "react";
import { Link } from "react-router-dom";

import NavBarGlobal from "../components/NavBarGlobal";
import CardProfessor from "../components/CardProfessor";

import search from '../assets/icons/search-gray.svg';
 
import '../styles/home.css';

export function Home() {
    const srcPerfil = "https://images.pexels.com/photos/7163364/pexels-photo-7163364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const interesses = [
        'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho' 
    ]

    const Professores = [
        {
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        },
        {
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        },
        {
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
                    <img className="search-icon" src={search} alt="Ícone de pesquisa" />
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
                            <Link to="/home" className="filtro-geral">Professores</Link>
                            <Link to="/home" className="filtro-geral">TCCs</Link>
                            <hr /> 
                        </div>

                        <div className="cards">
                            {Professores.map(professor => (
                                <CardProfessor 
                                    srcPerfil={professor.foto}
                                    nome={professor.name}
                                    email={professor.email}
                                    areas={professor.areas}
                                    status={professor.status}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )      
}