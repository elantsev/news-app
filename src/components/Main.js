import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomNews } from "../actions/fetch_custom_news";
import { News } from "./News";
// import { News } from "./News";

const Main = () => {
  const [sources, setSources] = useState([]);
  const [source, setSource] = useState("");
  const [relevance, setRelevance] = useState("");
  const customNews = useSelector(state => state.customSearch.customNews);
  const dispatch = useDispatch();

  const getSources = async () => {
    try {
      let response = await fetch("https://newsapi.org/v1/sources?");
      response = await response.json();
      setSources(response.sources);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSources();
  }, []);

  const getNews = e => {
    e.preventDefault();
    if (source) {
      dispatch(fetchCustomNews(source, relevance));
    }
  };

  return (
    <section>
      <h2>Custom Search</h2>

      <form onSubmit={getNews}>
        <div className="form-control">
          <label>Source</label>
          <select onChange={e => setSource(e.target.value)}>
            <option value="nothing">Select an option...</option>
            {sources.map(source => {
              return (
                <option key={source.id} value={source.id}>
                  {source.name}
                </option>
              );
            })}
          </select>
          <label>Relevance</label>
          <select onChange={e => setRelevance(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="top">Top</option>
          </select>
          <input type="submit" value="Search" />
        </div>
      </form>

      {customNews && customNews.length > 0 ? (
        <News news={customNews} />
      ) : (
        <p>Select a source and relevance from the form</p>
      )}
    </section>
  );
};

export default Main;
