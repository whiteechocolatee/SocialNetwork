import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  debugger;
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = state.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessage = props.newMessageText;

  let newMessageSend = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageSend.current.value;
    props.updateNewMessage(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messageElements}
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageSend}
            value={newMessage}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Sent message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
