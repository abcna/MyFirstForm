import React from "react";
import { useState } from "react";
export default function Inputs({ inputs }) {
  const { name, label, type, placeholder, help } = inputs;
  const [state, setstate] = useState("");
  function hanldeChange(e) { setstate(e.target.value)}
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
      onChange={hanldeChange}
        value={state}
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
