import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.post} quantity={post.likesCount} />
  ));

  let newPost = React.createRef();

  let addPost = () => {
      let text = newPost.current.value;
      alert(text);
  }

  return (
    <div className={classes.content}>
      <div>
        <h3>my post </h3>
      </div>
      <div>
        <div>
          <textarea ref={newPost}></textarea>
        </div>
        <div>
          <button className={classes.buttonAdd} onClick={ addPost}>Add post</button>
          <button className={classes.buttonRemove}>Remove post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
