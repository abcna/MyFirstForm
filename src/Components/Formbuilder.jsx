import React from "react";
import PropTypes from "prop-types";
import Inputs from "./Inputs";
import Toggles from "./Toggles";
import { useState } from "react";
export default function Formbuilder({ inputs, onSubmit }) {
  const [dataValue, setDataValue] = useState(initialState);

  function initialState() {
    const initialValue = {};
    inputs.forEach((input) => {
      initialValue[input.name] = input.defaultValue || "";
    });
    return initialValue;
  }

  function handleChange(e) {
    setDataValue({ ...dataValue, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(dataValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => {
        switch (input.type) {
          case "text": {
            return (
              <Inputs
                onChange={handleChange}
                value={dataValue[input.name]}
                inputs={input}
              />
            );
          }
          case "number": {
            return <Inputs onChange={handleChange} inputs={input} />;
          }
          case "Email": {
            return <Inputs onChange={handleChange} inputs={input} />;
          }
          case "checkbox": {
            return <Toggles inputs={input} />;
          }
          default:
            return <p> {inputs.type} is not supported </p>;
        }
      })}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
Formbuilder.prototype = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "number", "Email"]),
  placeHolder: PropTypes.string,
};
