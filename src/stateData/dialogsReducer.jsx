const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    let myMessage = {
      message: state.newMessageText,
      id: 6,
    };
    state.messages.push(myMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_NEW_MESSAGE) {
    state.newMessageText = action.newMessage;
  }

  return state;
};

export default dialogsReducer;
