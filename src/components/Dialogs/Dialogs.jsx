import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return (
    <div className={c.dialog}>
      <NavLink to={props.id} activeClassName={c.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>
        <DialogItem name="Liza" id="1" />
        <DialogItem name="Nikita" id="2" />
        <DialogItem name="Kirill" id="3" />
        <DialogItem name="Kseniya" id="4" />
        <DialogItem name="Denis" id="5" />
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
