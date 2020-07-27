import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../stateData/state";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} quantity={post.likesCount} />
  ));

  let newPost = React.createRef();

  let addPost = () => {
    debugger;
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    let action = onPostChangeActionCreator(text);
    newPost.current.value = "";
    props.dispatch(action);
  };

  return (
    <div className={classes.content}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPost}
            value={props.newPostText}
          />
        </div>
        <div>
          <button className={classes.buttonAdd} onClick={addPost}>
            Add post
          </button>
        </div>
      </div>
      <div>
        <h3>New posts</h3>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
