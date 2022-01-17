import React from "react";

import './style.css';

export default function Input({ className, required, name, question, type, placeholder}) {
    return (
        <div>
            <div className="label-required">
                <label for={name}>{question}</label>
                <label id={required}>*</label>
            </div>
            <input
                className={className}
                id={name}
                type={type}
                placeholder= {placeholder}
            />
        </div>
    )
}