import React, { Fragment } from "react";
import classes from "./Button.module.css";

const Button = () => {
  return (
    <main className={classes.main}>
      <h2>Buttons</h2>
      <button className={classes.btn}>Button</button>
    </main>
  );
};

export default Button;
