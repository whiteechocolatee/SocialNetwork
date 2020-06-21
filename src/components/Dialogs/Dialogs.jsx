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
let dialogsElements = dialogsData.map((dialog) => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

let MessageData = [
  { message: "Hi!", id: 1 },
  { message: "How are u?", id: 2 },
  { message: "Fine!", id: 3 },
  { message: "Hello guys!", id: 4 },
  { message: "What u say about...", id: 5 },
];

let messageElements = MessageData.map((message) => (
  <Message message={message.message} id={message.id} />
));

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>{dialogsElements}</div>
      <div className={c.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
