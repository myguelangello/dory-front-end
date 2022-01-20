import React from "react";
import CardProfessor from "../CardProfessor";

import './style.css';

export default function MenuProfessores({ status, professores }) {
    return (
        <ul className="cards">
            {status && professores.map(professor => (
                <CardProfessor 
                    idProfessor={professor.id}
                    srcPerfil={professor.foto}
                    nome={professor.nome}
                    email={professor.email}
                    areas={professor.areas}
                    status={professor.status}
                />
            ))}
        </ul>
    )
}