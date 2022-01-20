import React from "react";
import CardTCC from "../CardTCC";

import './style.css';

export default function MenuTCCs({ status, TCCs }) {
    return (
        <ul className="cards">
            {status && TCCs.map(TCC => (
                <CardTCC 
                    idTCC={TCC.id}
                    title={TCC.title}
                    aluno={TCC.aluno}
                    professor={TCC.professor}
                    areas={TCC.areas}
                />
            ))}
        </ul>
    )
}