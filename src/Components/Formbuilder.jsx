import React from "react";
import PropTypes from "prop-types";
import Inputs from "./Inputs";
import Toggles from "./Toggles";
export default function Formbuilder( {inputs} ) {
  return (
    <form>
      {inputs.map((input) => {
        switch (input.type) {
          case "text": {
            return <Inputs inputs={input} />;
            
          } 
          case "number": {
            return <Inputs inputs={input} />;
            
          }
          case "Email": {
            return <Inputs inputs={input} />;
            
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
