import React from 'react';

import './style.css';

export default function TextArea(props) {
  return (
    <div>
      <div className="label-required">
        <label htmlFor={props.name}>{props.question}</label>
        <label id="required">*</label>
      </div>
      <p className={props.subtitleRequired}>{props.subtitle}</p>
      <textarea
        id={props.name}
        rows="6"
        cols="40"
        placeholder={props.placeholder}
      />
    </div>
  );
}
