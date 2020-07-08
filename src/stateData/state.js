let store = {
  _state : {
    profilePage: {
      posts: [
        { message: "Hi man!!", id: 1, likesCount: 42 },
        { message: "i am fine!", id: 2, likesCount: 23 },
        { message: "The greatest page ever!!!!", id: 3, likesCount: 12 },
        { message: "blablabla", id: 4, likesCount: 63 },
        { message: "haha", id: 5, likesCount: 17 },
      ],
      newPostText: "...",
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
    },
  },

  getState () {
    return this._state;
  },

  addPost(postMessage) {
    let myPost = {
      message: postMessage,
      id: 6,
      likesCount: 77,
    };
    this._state.profilePage.posts.push(myPost);
    this._rerenderTree(this._state);
  },
  
  updateNewPost(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderTree(this._state);
  },
  
  subscribe(observer) {
    this._rerenderTree = observer;
  },
  
  _callSubscriber  ()  {
    console.log("tree changed");
  },
};

export default store;

