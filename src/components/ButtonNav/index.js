import React from "react";

import './style.css';

export default function ButtonNav({ setStatus, name }) {
    return (
        <button 
            className="filtro-geral"
            onClick={setStatus}
        >
            {name}
        </button>
    )
}