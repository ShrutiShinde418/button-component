import React from "react";
import ButtonHeading from "../ButtonHeading/ButtonHeading";
import "./Button.scss";
var classNames = require("classnames");

const Button = (props) => {
  console.log(props.disabled);
  return (
    <div>
      <ButtonHeading title={props.title} class={props.headingClass} />
      <button
        type="button"
        className={classNames(props.class)}
        disabled={props.disabled}
      >
        {props.content}
      </button>
    </div>
  );
};

export default Button;
