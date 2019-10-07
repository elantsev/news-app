import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomNews } from "../actions/fetch_custom_news";
import { News } from "./News";
// import { News } from "./News";

const Main = () => {
  const [sources, setSources] = useState([]);
  const [source, setSource] = useState("");
  const [relevance, setRelevance] = useState("");
  const customSearch = useSelector(state => state.customSearch);
  const dispatch = useDispatch();
  const { customNews, isLoading } = customSearch;

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
            <option value="nothing">Select a site...</option>
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
          <input type="submit" value="Search" disabled={isLoading} />
        </div>
      </form>
      {isLoading && "Loading..."}
      {customNews.length > 0 && <News news={customNews} />}
      {customNews.length === 0 && !isLoading && (
        <p>Select a source and relevance from the form</p>
      )}
    </section>
  );
};

export default Main;
