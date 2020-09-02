const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: "Andrey",
      status: "Hi guys, my name is Andrey",
      location: { city: "Kharkiv", country: "Ukraine" },
    },
    {
      id: 2,
      followed: false,
      fullName: "Andrey",
      status: "Hi guys, my name is Andrey",
      location: { city: "Kharkiv", country: "Ukraine" },
    },
    {
      id: 3,
      followed: true,
      fullName: "Andrey",
      status: "Hi guys, my name is Andrey",
      location: { city: "Kharkiv", country: "Ukraine" },
    },
  ],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      return state;
    }
  }
};

export default usersReducer;

export const followAC = (userId) => {
  return {
    type: "FOLLOW",
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: "UNFOLLOW",
    userId,
  };
};

export const setUsersAC = (users) => ({ type: SET_USERS, users });
