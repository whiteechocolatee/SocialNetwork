import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = () => {
  let dialogsData = [
    { name: "Liza", id: 1 },
    { name: "Nikita", id: 2 },
    { name: "Kirill", id: 3 },
    { name: "Kseniya", id: 4 },
    { name: "Denis", id: 5 },
  ];

  let messageData = [
    { message: "Hi!", id: 1 },
    { message: "How are u?", id: 2 },
    { message: "Fine!", id: 3 },
    { message: "Hello guys!", id: 4 },
    { message: "What u say about...", id: 5 },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = messageData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElements}</div>
      <div className={classes.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
