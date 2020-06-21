import React from "react";
// import "./Profile.module.css";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
// import Likes from "./Post/Likes";

const MyPosts = () => {
  let postData = [
    { post: "Hi man", id: 1, likesCount: 42 },
    { post: "i will be fine!", id: 2, likesCount: 23 },
  ];

  return (
    <div className={c.content}>
      <div>
        <h3>my post </h3>
      </div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className={c.buttonAdd}>Add post</button>
          <button className={c.buttonRemove}>Remove post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={c.posts}>
        <Post message={postData[0].post} quantity={postData[0].likesCount} />

        <Post message={postData[1].post} quantity={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
