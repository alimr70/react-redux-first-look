const authReducer = (state = { isLogged: false, user: "" }, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLogged: true, user: "" };

    case "LOG_OUT":
      return { ...state, isLogged: false, user: "" };

    default:
      return state;
  }
};

export default authReducer;
