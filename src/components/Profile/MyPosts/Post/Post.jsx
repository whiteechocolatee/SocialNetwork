import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://cs8.pikabu.ru/post_img/big/2017/11/22/10/1511371748167955278.png" />
      {props.message}
      <div className={c.likes}>
        {props.quantity}
      </div>
    </div>
  );
};

export default Post;
