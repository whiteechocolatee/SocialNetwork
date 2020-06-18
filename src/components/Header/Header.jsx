import React from "react";
// import './Header.module.css';
import c from './Header.module.css'

// let c = {
//   'header':'Header_header__3mObx img'
// }

const Header = () => {
  return (
    <header className={c.header}>
      <img src="https://cdn.svgporn.com/logos/airflow.svg" />
    </header>
  );
};

export default Header;