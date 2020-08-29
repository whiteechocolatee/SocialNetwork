const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initState = {
  messages: [
    { message: "Hi!", id: 1 },
    { message: "How are u?", id: 2 },
    { message: "Fine!", id: 3 },
    { message: "Hello guys!", id: 4 },
    { message: "What u say about...", id: 5 },
  ],

  dialogs: [
    { name: "Liza", id: 1 },
    { name: "Nikita", id: 2 },
    { name: "Kirill", id: 3 },
    { name: "Kseniya", id: 4 },
    { name: "Denis", id: 5 },
  ],
  newMessageText: "...",
};

const dialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let myMessage = {
        message: state.newMessageText,
        id: 6,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(myMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    }
    default: {
      return state;
    }
  }

  // if (action.type === ADD_MESSAGE) {
  //   let myMessage = {
  //     message: state.newMessageText,
  //     id: 6,
  //   };
  //   state.messages.push(myMessage);
  //   state.newMessageText = "";
  // } else if (action.type === UPDATE_NEW_MESSAGE) {
  //   state.newMessageText = action.newMessage;
  // }

  // return state;
};

export default dialogsReducer;

export const addMessageCreator = () => {
  return {
    type: "ADD-MESSAGE",
  };
};

export const onMessageChangeCreator = (text) => {
  return { type: "UPDATE-NEW-MESSAGE", newMessage: text };
};
