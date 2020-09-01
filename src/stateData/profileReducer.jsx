const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initState = {
  posts: [
    { message: "Hi man!!", id: 1, likesCount: 42 },
    { message: "i am fine!", id: 2, likesCount: 23 },
    { message: "The greatest page ever!!!!", id: 3, likesCount: 12 },
    { message: "blablabla", id: 4, likesCount: 63 },
    { message: "haha", id: 5, likesCount: 17 },
  ],
  newPostText: "...",
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let myPost = {
        message: state.newPostText,
        id: 6,
        likesCount: 77,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(myPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const onPostChangeActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST", newText: text };
};
