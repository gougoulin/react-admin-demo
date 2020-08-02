let initData = [
  { id: 1001, name: "Tom", email: "tom.tom@gm.com" },
  { id: 1002, name: "Tony", email: "tony.tony@gm.com" },
];

const userReducer = (state = initData, action) => {
  switch (action.type) {
    case "GET_USER":
      return state;
    default:
      return state;
  }
};

export default userReducer;
