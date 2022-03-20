const initialState = {
  name: "",
  email: "",
  isLoggedIn: false,
};

export const auth = (state = initialState, action?: any) => {
  switch (action?.type) {
    case "Test":
      return {
        ...state,
        ...action?.payload,
      };
    default:
      return state;
  }
};
