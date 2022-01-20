import React from "react";

import './style.css';

export default function ButtonNav({ setStatus, name, id }) {
    return (
        <div className="filtro-button">
            <button 
                className="filtro-geral"
                onClick={setStatus}
                id={id}
            >
                {name}
            </button>

            <hr id={id} />
        </ div>
    )
}