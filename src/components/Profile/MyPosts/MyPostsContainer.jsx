import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../stateData/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext>
//       {(store) => {
//         let addPost = () => {
//           props.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           let action = onPostChangeActionCreator(text);
//           props.dispatch(action);
//         };
//         return (
//           <MyPosts
//             newPostText={store.getState().profilePage.newPostText}
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={store.getState().profilePage.posts}
//           />
//         );
//       }}
//     </StoreContext>
//   );
// };

const mapStateToProps = (store) => {
  return {
    profilePage: store.profilePage,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      // let action = onPostChangeActionCreator();
      dispatch(onPostChangeActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts);

export default MyPostsContainer;
