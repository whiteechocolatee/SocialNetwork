import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../stateData/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  debugger;

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.dispatch(action);
  };

  return (
    <MyPosts
      newPostText={props.profilePage.newPostText}
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={props.profilePage.posts}
    />
  );
};

export default MyPostsContainer;
