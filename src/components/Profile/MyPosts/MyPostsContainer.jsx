import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../stateData/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.dispatch(action);
  };

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
