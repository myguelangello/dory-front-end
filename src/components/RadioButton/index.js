import React from 'react';

import './style.css';

export default function RadioButton({ name, question, checked, onChange }) {
  return (
    <div className="content">
      <input
        className="radio"
        id={name}
        type="radio"
        value={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="label-radio">{question}</label>
    </div>
  );
}
