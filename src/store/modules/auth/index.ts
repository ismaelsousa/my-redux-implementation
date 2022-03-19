const initialState = {
  name: "",
  email: "",
  isLoggedIn: false,
};

export const auth = (state = initialState, action?: any) => {
  console.log({ state, action });

  switch (action?.type) {
    case "Test":
      console.log("Entrei");

      return {
        ...state,
        ...action?.payload,
      };
    default:
      return state;
  }
};
