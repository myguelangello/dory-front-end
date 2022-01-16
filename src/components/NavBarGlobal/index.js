import React from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/logo-negativa.svg';
import search from '../../assets/icons/search.svg';
import envelope from '../../assets/icons/envelope.svg';
import imgPerfil from '../../assets/perfil.png';

import './style.css';

export default function NavBarGlobal() {
    return (
        <nav className="container">
            <img className="logo" src={logo} alt="Dory" />

            <div className="quick-access">
                <Link className="access"
                    to={() => {}}
                >
                    Professores
                </Link>
                <Link className="access"
                    to={() => {}}
                >
                    TCCs
                </Link>
            </div>

            <div className="search">
                <img className="search-icon" src={search} alt="Ícone de pesquisa" />
                <hr />
            </div>

            <div className="user-access">
                <div className="item">
                    <div className="circle-img">
                        <img className="solicitacoes-icon" src={envelope} alt="ícone de solicitação" />
                    </div>

                    <Link className="access"
                        to={() => {}}
                    >
                        Solicitações
                    </Link>
                </div>
                <div className="item">
                    <div className="circle-img">
                        <img className="perfil-icon" src={imgPerfil} alt="Foto de perfil de Alissa" />
                    </div>
                    
                    <Link className="access"
                        to={() => {}}
                    >
                        Alissa
                    </Link>
                </div>
            </div>
        </nav>
    )
}