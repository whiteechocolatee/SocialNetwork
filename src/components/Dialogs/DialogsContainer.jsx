import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {
  onMessageChangeCreator,
  addMessageCreator,
} from "../../stateData/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let onMessageChange = (text) => {
    let action = onMessageChangeCreator(text);
    props.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      state={props.state.dialogsPage}
      dispatch={props.dispatch}
      store={props.store}
    />
  );
};

export default DialogsContainer;
