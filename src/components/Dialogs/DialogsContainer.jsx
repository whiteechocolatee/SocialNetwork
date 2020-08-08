import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {
  onMessageChangeCreator,
  addMessageCreator,
} from "../../stateData/dialogsReducer";

const Dialogs = (props) => {
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

  return <Dialogs />;
};

export default Dialogs;
