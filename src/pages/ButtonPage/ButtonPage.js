import React, { Fragment } from "react";
import classes from "./ButtonPage.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

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
          class="primary-sm row-reverse"
          icon={true}
          title='<Button startIcon="local_grocery_store" />'
          headingClass="heading"
        />
        <Button
          content="Default"
          class="primary-sm row"
          icon={true}
          title='<Button endIcon="local_grocery_store" />'
          headingClass="state"
        />
      </div>
      <div className={classes["grid-2"]}>
        <Button
          content="Default"
          class="primary-sm drop-shadow-blue"
          title='<Button size="sm" />'
          headingClass="heading"
        />
        <Button
          content="Default"
          class="primary-md drop-shadow-blue"
          title='<Button size="md" />'
          headingClass="heading"
        />
        <Button
          content="Default"
          class="primary-lg drop-shadow-blue"
          title='<Button size="lg" />'
          headingClass="heading"
        />
      </div>
      <div className={classes["grid-2"]}>
        <Button
          content="Default"
          class="default drop-shadow"
          title='<Button color="default"/>'
          headingClass="heading"
        />
        <Button
          content="Default"
          class="primary-sm"
          title='<Button color="primary" />'
          headingClass="heading"
        />
        <Button
          content="Secondary"
          class="secondary-sm"
          title='<Button color="secondary" />'
          headingClass="heading"
        />
        <Button
          content="Danger"
          class="danger-sm"
          title='<Button color="danger" />'
          headingClass="heading"
        />
      </div>
      <div className={classes["grid-2"]}>
        <Button
          content="Default"
          class="default-grey"
          title="&:hover, &:focus"
          headingClass="state"
        />
        <Button
          content="Default"
          class="primary-focus"
          title=""
          headingClass="state"
        />
        <Button
          content="Secondary"
          class="secondary-focus"
          title=""
          headingClass="state"
        />
        <Button
          content="Danger"
          class="danger-focus"
          title=""
          headingClass="state"
        />
      </div>
      <Footer />
    </main>
  );
};

export default ButtonsPage;
