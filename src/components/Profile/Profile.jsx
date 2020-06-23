import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // let posts = [
  //   { post: "Hi man!!", id: 1, likesCount: 42 },
  //   { post: "i am fine!", id: 2, likesCount: 23 },
  //   { post: "The greatest page ever!!!!", id: 3, likesCount: 12 },
  //   { post: "blablabla", id: 4, likesCount: 63 },
  //   { post: "haha", id: 5, likesCount: 17 },
  // ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
