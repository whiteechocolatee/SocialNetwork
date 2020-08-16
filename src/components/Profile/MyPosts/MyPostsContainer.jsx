import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../stateData/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.dispatch(action);
  };

  return (
    <StoreContext>
      {(store) => (
        <MyPosts
          newPostText={store.getState().profilePage.newPostText}
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={store.getState().profilePage.posts}
        />
      )}
    </StoreContext>
  );
};

export default MyPostsContainer;
