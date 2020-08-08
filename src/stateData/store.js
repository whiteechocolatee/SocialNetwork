import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi man!!", id: 1, likesCount: 42 },
        { message: "i am fine!", id: 2, likesCount: 23 },
        { message: "The greatest page ever!!!!", id: 3, likesCount: 12 },
        { message: "blablabla", id: 4, likesCount: 63 },
        { message: "haha", id: 5, likesCount: 17 },
      ],
      newPostText: "enter message...",
    },
    dialogsPage: {
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
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerenderTree = observer;
  },

  _callSubscriber() {
    console.log("tree changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._rerenderTree(this._state);
  },
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const onPostChangeActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST", newText: text };
};

export const addMessageCreator = () => {
  return {
    type: "ADD-MESSAGE",
  };
};

export const onMessageChangeCreator = (text) => {
  return { type: "UPDATE-NEW-MESSAGE", newMessage: text };
};

export default store;
