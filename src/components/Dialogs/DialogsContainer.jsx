import React from "react";
import {
  onMessageChangeCreator,
  addMessageCreator,
} from "../../stateData/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  debugger;
  return (
    <StoreContext.Consumer>
      {(store) => {
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
            dialogs={store.getState().dialogsPage.dialogs}
            messages={store.getState().dialogsPage.messages}
            newMessageText={store.getState().dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
