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

let dialogsData = [
  { name: "Liza", id: 1 },
  { name: "Nikita", id: 2 },
  { name: "Kirill", id: 3 },
  { name: "Kseniya", id: 4 },
  { name: "Denis", id: 5 },
];

let DialogsData = [
  { name: "Liza", id: 1 },
  { name: "Nikita", id: 2 },
  { name: "Kirill", id: 3 },
  { name: "Kseniya", id: 4 },
  { name: "Denis", id: 5 },
];

let MessageData = [
  { message: "Hi!", id: 1 },
  { message: "How are u?", id: 2 },
  { message: "Fine!", id: 3 },
  { message: "Hello guys!", id: 4 },
  { message: "What u say about...", id: 5 },
];

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={c.messages}>
        <Message message={MessageData[0].message} id={MessageData[0].id} />
        <Message message={MessageData[1].message} id={MessageData[1].id} />
        <Message message={MessageData[2].message} id={MessageData[2].id} />
        <Message message={MessageData[3].message} id={MessageData[3].id} />
        <Message message={MessageData[4].message} id={MessageData[4].id} />
      </div>
    </div>
  );
};

export default Dialogs;
