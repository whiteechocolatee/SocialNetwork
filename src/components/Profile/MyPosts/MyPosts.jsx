import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { post: "Hi man!!", id: 1, likesCount: 42 },
    { post: "i am fine!", id: 2, likesCount: 23 },
    { post: "The greatest page ever!!!!", id: 1, likesCount: 12 },
    { post: "blablabla", id: 2, likesCount: 63 },
  ];

  let postElements = postData.map((post) => (
    <Post message={post.post} quantity={post.likesCount} />
  ));

  return (
    <div className={classes.content}>
      <div>
        <h3>my post </h3>
      </div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className={classes.buttonAdd}>Add post</button>
          <button className={classes.buttonRemove}>Remove post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
