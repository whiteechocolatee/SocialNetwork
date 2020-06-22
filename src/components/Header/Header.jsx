import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://cdn.svgporn.com/logos/airflow.svg" />
    </header>
  );
};

export default Header;
