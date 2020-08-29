import React from "react";
import {
  onMessageChangeCreator,
  addMessageCreator,
} from "../../stateData/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let addMessage = () => {
//           props.dispatch(addMessageCreator());
//         };

//         let onMessageChange = (text) => {
//           let action = onMessageChangeCreator(text);
//           props.dispatch(action);
//         };
//         return (
//           <Dialogs
//             addMessage={addMessage}
//             updateNewMessage={onMessageChange}
//             dialogs={store.getState().dialogsPage.dialogs}
//             messages={store.getState().dialogsPage.messages}
//             newMessageText={store.getState().dialogsPage.newMessageText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
// export default DialogsContainer;

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
