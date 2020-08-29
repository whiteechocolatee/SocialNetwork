import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
      //dispatch={props.dispatch}
      //profilePage={props.profilePage}
      //posts={props.profilePage.posts}
      //newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
