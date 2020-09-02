import React from "react";
import {
  onMessageChangeCreator,
  addMessageCreator,
} from "../../stateData/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (store) => {
  debugger;
  return {
    dialogsPage: store.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    updateNewMessage: (text) => {
      let action = onMessageChangeCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      dispatch(addMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
