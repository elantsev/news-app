const initialState = {
  customNews: [],
  isLoading: false
};

export const customSearch = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CUSTOM_NEWS":
      return { ...state, customNews: action.payload, isLoading: false };

    case "FETCH_CUSTOM_NEWS_IS_LOADING":
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
