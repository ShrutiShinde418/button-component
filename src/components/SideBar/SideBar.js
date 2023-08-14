import React from "react";
import classes from "./SideBar.module.css";

const links = ["Colors", "Typography", "Spaces", "Buttons", "Inputs", "Grid"];

const SideBar = () => {
  return (
    <nav className={classes.sidebar}>
      <h1>
        <span>Dev</span>challenges.io
      </h1>
      <ul className={classes.navbar}>
        {links.map((link) => {
          return (
            <li>
              <a
                href="#"
                className={
                  link === "Inputs"
                    ? `${classes.navLink} ${classes.active}`
                    : classes.navLink
                }
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
