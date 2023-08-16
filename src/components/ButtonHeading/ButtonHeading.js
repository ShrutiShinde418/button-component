import React from "react";
import classes from "./ButtonHeading.module.css";

const ButtonHeading = (props) => {
  return <p className={classes[props.class]}>{props.title}</p>;
};

export default ButtonHeading;
