import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { post: "Hi man!!", id: 1, likesCount: 42 },
    { post: "i am fine!", id: 2, likesCount: 23 },
  ];

  let postElements = postData.map((post) => (
    <Post message={post.post} quantity={post.likesCount} />
  ));

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
      <div className={c.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
