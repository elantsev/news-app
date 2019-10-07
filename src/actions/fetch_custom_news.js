import { API_KEY } from "../API_KEY";

export function fetchCustomNews(source, relevance) {
  return async function(dispatch) {
    try {
      dispatch({ type: "FETCH_CUSTOM_NEWS_IS_LOADING" });
      let response = await fetch(
        `https://newsapi.org/v1/articles?source=${source}&sortBy${relevance}+&apiKey=${API_KEY}`
      );
      if (response.status === 200) {
        response = await response.json();
        dispatch({ type: "FETCH_CUSTOM_NEWS", payload: response.articles });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
