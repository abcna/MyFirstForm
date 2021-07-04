import React from "react";
export default function Inputs({ inputs, value, onChange }) {
  const { name, label, type, placeholder, help } = inputs;
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-control"
        id={name}
      />
      <div id={name} className="form-text">
        {help}
      </div>
    </div>
  );
}
