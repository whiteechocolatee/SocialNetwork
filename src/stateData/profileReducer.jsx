const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const profileReducer = (action, state) => {
  if (action.type === ADD_POST) {
    let myPost = {
      message: state.newPostText,
      id: 6,
      likesCount: 77,
    };
    state.posts.push(myPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST) {
    state.newPostText = action.newText;
  }

  return state;
};

export default profileReducer;
