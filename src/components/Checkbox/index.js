import React from "react";

import './style.css';

export default function Checkbox(props) {
    return (
        <div className="content">
            <input
                className="checkbox"
                id={props.name}
                type="checkbox"
                value={props.name}
                checked={() => {}}
                onChange={() => {}}
            />  
            <label className="label-checkbox">
                {props.question}
            </label>
        </div>
    )
}