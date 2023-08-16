import React, { Fragment } from "react";
import classes from "./ButtonPage.module.css";
import Button from "../Button/Button";

const ButtonsPage = () => {
  return (
    <main className={classes.main}>
      <h2>Buttons</h2>
      <div className={classes["grid-1"]}>
        <Button
          content="Default"
          class="default drop-shadow"
          title="<Button />"
          headingClass="heading"
        />
        <Button
          content="Default"
          class="default-grey"
          title="&:hover, &:focus"
          headingClass="state"
        />
      </div>
      <div className={classes["grid-1"]}>
        <Button
          content="Default"
          class="outline-blue"
          title='<Button variant="outline" />'
          headingClass="heading"
        />
        <Button
          content="Default"
          class="default-blue"
          title="&:hover, &:focus"
          headingClass="state"
        />
      </div>
      <div className={classes["grid-1"]}>
        <Button
          content="Default"
          class="text"
          title='<Button variant="text" />'
          headingClass="heading"
        />
        <Button
          content="Default"
          class="text-hover"
          title="&:hover, &:focus"
          headingClass="state"
        />
      </div>
      <div className={classes["grid-1"]}>
        <Button
          content="Default"
          class="blue"
          title="<Button disableShadow />"
          headingClass="heading"
        />
      </div>
      <div className={classes["grid-1"]}>
        <Button
          content="Disabled"
          class="disabled-default"
          title="<Button disabled />"
          headingClass="heading"
          disabled={true}
        />
        <Button
          content="Disabled"
          class="disabled-text"
          title='<Button variant="text" disabled />'
          headingClass="state"
          disabled={true}
        />
      </div>
      <div className={classes["grid-1"]}>
        <Button
          content="Default"
          class="primary row-reverse"
          icon={true}
          title='<Button startIcon="local_grocery_store" />'
          headingClass="heading"
        />
        <Button
          content="Default"
          class="primary row"
          icon={true}
          title='<Button endIcon="local_grocery_store" />'
          headingClass="state"
        />
      </div>
    </main>
  );
};

export default ButtonsPage;
