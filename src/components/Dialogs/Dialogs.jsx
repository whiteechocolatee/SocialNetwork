import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>
        <div className={c.dialog}>
          <NavLink to="/dialogs/1" activeClassName={c.active}>
            Liza
          </NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/2" activeClassName={c.active}>
            Nikita
          </NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/3" activeClassName={c.active}>
            Kirill
          </NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/4" activeClassName={c.active}>
            Kseniya
          </NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/5" activeClassName={c.active}>
            Denis
          </NavLink>
        </div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Hi</div>
        <div className={c.message}>How are u?</div>
        <div className={c.message}>Fine!</div>
        <div className={c.message}>Hello guys</div>
        <div className={c.message}>What u say about...</div>
      </div>
    </div>
  );
};

export default Dialogs;
