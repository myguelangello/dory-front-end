import React from "react";

import './style.css';

export default function CardTCC({ idTCC, title, aluno, professor , areas }) {
    return (
        <li key={idTCC} className="card" id="TCC">
            <h2>{title}</h2>

            <ul className="tags-areas">
                {areas.map((area, index) => <li key={index} className="tag">{area}</li>)}
            </ul>

            <div className="infos">
                <p>
                    <strong>Autor: </strong><label>{aluno}</label> 
                </p>
                <p>
                    <strong>Orientador: </strong><label>{professor}</label>
                </p>
            </div>
           
            <button className="yellow" type="submit">
                Ver TCC
            </button>
        </li>
    )
}