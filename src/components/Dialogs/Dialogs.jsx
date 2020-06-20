import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={c.dialog}>
      <NavLink to={path} activeClassName={c.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={c.message}>{props.message}</div>;
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
        <Message message="Hi!" />
        <Message message="How are u?" />
        <Message message="Fine!" />
        <Message message="Hello guys" />
        <Message message="What u say about..." />
      </div>
    </div>
  );
};

export default Dialogs;
