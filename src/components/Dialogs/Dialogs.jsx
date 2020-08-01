import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {
  addMessageCreator,
  onMessageChangeCreator,
} from "../../stateData/store";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.state.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessage = props.state.newMessageText;

  let newMessageSend = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let onMessageChange = () => {
    let text = newMessageSend.current.value;
    let action = onMessageChangeCreator(text);
    newMessageSend.current.value = "";
    props.dispatch(action);
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
            // placeholder="Enter your message..."
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
