import React from "react";

import './style.css';

export default function TextArea(props) {
    return (
        <div>
            <div className="label-required">
                <label for={props.name}>{props.question}</label>
                <label id="required">*</label>
            </div>
            <textarea
                id={props.name}
                rows="6"
                cols="40"
                placeholder= {props.placeholder}
            />
        </div>
    )
}