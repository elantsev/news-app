import { API_KEY } from "../API_KEY";

export function fetchCustomNews(source, relevance) {
  return function(dispatch) {
    fetch(
      `https://newsapi.org/v1/articles?source=${source}&sortBy${relevance}+&apiKey=${API_KEY}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch({ type: "FETCH_CUSTOM_NEWS", payload: res.articles });
      })
      .catch(err => console.log(err));
  };
}
