const initialState = {
  techNews: []
};

export const fetchTech = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TECH":
      return { ...state, techNews: action.payload };

    default:
      return state;
  }
};
