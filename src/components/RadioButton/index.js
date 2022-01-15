import React from "react";

import './style.css';

export default function RadioButton(props) {
    return (
        <label className="label-radio">
            <input
                id={props.name}
                type="radio"
                value={props.name}
                checked={() => {}}
                onChange={() => {}}
            /> 
           {props.name}
        </label>
    )
}