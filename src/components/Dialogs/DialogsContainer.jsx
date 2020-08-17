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
            state={store.getState().state}
            dispatch={store.getState().dispatch}
            store={store.getState().store}
            dialogs={store.getState().dialogsPage.dialogs}
            messages={store.getState().dialogsPage.messages}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
