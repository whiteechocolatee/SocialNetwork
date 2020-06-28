import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.state.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageSend = React.createRef();

  let addMessage = (props) => {
    let text = newMessageSend.current.value;
    alert(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messageElements}
        <div>
          <textarea ref={newMessageSend}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Sent message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
