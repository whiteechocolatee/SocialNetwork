import React from "react";
// import "./Profile.module.css";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
// import Likes from "./Post/Likes";

const MyPosts = () => {
  return (
    <div className={c.content}>
      <div>my post</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div>new post</div>
      <div className={c.posts}>
        <Post message='Hi man' quantity='Likes 42'/>
        {/* <Likes quantity='Likes 40'/>  */}
        <Post message='i will be fine!' quantity='Likes 23'/>
        {/* <Likes quantity='Likes 53'/> */}
      </div>
    </div>
  );
};

export default MyPosts;
