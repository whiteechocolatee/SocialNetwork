import React from "react";
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
      updateNewMessage={onMessageChange}
      state={props.state}
      dispatch={props.dispatch}
      store={props.store}
      dialogs={props.state.dialogs}
      messages={props.state.messages}
    />
  );
};

export default DialogsContainer;
