const initialState = {
  list: [],
};

export const posts = (state = initialState, action: any) => {
  switch (action?.type) {
    case "agente":
      return {
        ...state,
        list: [...state.list, { name: "gente" }],
      };
    default:
      return state;
  }
};
