import { API_KEY } from "../API_KEY";

export function fetchTech() {
  return async function(dispatch) {
    try {
      let response = await fetch(
        `https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=${API_KEY}`
      );
      if (response.status === 200) {
        response = await response.json();
        dispatch({ type: "FETCH_TECH", payload: response.articles });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
