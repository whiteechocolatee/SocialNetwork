import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        dispatch={props.dispatch}
        profilePage={props.profilePage}
        posts={props.profilePage.posts}
        // dispatch={props.dispatch}
        // newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
