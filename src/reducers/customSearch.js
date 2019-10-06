const initialState = {
  customNews: []
};

export const customSearch = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CUSTOM_NEWS":
      return { ...state, customNews: action.payload };

    default:
      return state;
  }
};
