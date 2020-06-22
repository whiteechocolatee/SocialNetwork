import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://cs8.pikabu.ru/post_img/big/2017/11/22/10/1511371748167955278.png" />
      {props.message}
      <div className={classes.likes}>
        <div>Likes {props.quantity}</div>
      </div>
    </div>
  );
};

export default Post;
