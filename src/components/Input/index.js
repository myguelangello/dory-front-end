import React from "react";

import './style.css';

export default function Input(props) {
    return (
        <div>
            <div className="label-required">
                <label for={props.name}>{props.question}</label>
                <label id={props.required}>*</label>
            </div>
            <input
                id={props.name}
                type={props.type}
                placeholder= {props.placeholder}
            />
        </div>
    )
}