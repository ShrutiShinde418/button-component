import React from "react";
import ButtonHeading from "../ButtonHeading/ButtonHeading";
import "./Button.scss";
import icon from "../../icon.svg";
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
        {props.icon && <img src={icon} alt="local_grocery_store" />}
      </button>
    </div>
  );
};

export default Button;
