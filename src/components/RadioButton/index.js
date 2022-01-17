import React from "react";

import './style.css';

export default function RadioButton(props) {
    return (
        <div className="content">
            <input
                className="radio"
                id={props.name}
                type="radio"
                value={props.name}
                checked={() => {}}
                onChange={() => {}}
            />  
            <label className="label-radio">
                {props.question}
            </label>
        </div>
    )
}