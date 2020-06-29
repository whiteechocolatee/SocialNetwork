import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} quantity={post.likesCount} />
  ));

  let newPost = React.createRef();

  let addPost = () => {
    let text = newPost.current.value;
    newPost.current.value = "";
    props.addPost(text);
  };

  return (
    <div className={classes.content}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea ref={newPost}></textarea>
        </div>
        <div>
          <button className={classes.buttonAdd} onClick={addPost}>
            Add post
          </button>
        </div>
      </div>
      <div>new post</div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
