import React from "react";

export default function Toggles({ inputs }) {
  const { name, label, type } = inputs;
  return (
    <div className="mb-3 form-check">
      <input type={type} className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        {name}
      </label>
    </div>
  );
}
