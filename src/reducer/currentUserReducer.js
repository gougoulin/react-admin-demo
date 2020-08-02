let initData = {
  avatar: "avatar",
  name: "Lin Lai",
};

const CurrentUserReducer = (state = initData, action) => {
  switch (action.type) {
    case "GET_CURRENTUSER":
      return state;
    default:
      return state;
  }
};

export default CurrentUserReducer;
