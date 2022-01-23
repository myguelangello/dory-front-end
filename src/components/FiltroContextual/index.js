import React from "react";

import './style.css';

export default function FiltroContextual({ filtro1, filtro2 }) {
    return (
        <div className="container-filtros-contextuais">
            <div className="filtros-contextuais">
                <button>{filtro1}</button>
                <button>{filtro2}</button>
            </div>
            
            <button className="todos-os-filtros">Todos os filtros</button>
        </div>
    )
}