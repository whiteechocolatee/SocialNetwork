let state = {
  profilePage: {
    posts: [
      { message: "Hi man!!", id: 1, likesCount: 42 },
      { message: "i am fine!", id: 2, likesCount: 23 },
      { message: "The greatest page ever!!!!", id: 3, likesCount: 12 },
      { message: "blablabla", id: 4, likesCount: 63 },
      { message: "haha", id: 5, likesCount: 17 },
    ],
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
};

export let addPost = (postMessage) => {
  let myPost = {
    message: postMessage,
    id:6,
    likesCount:77
  };
  state.profilePage.posts.push(myPost);
};

export default state;
