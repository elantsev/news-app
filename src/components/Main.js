import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomNews } from "../actions/fetch_custom_news";

const Main = () => {
  const [sources, setSources] = useState([]);
  const [source, setSource] = useState("");
  const [relevance, setRelevance] = useState("");
  const customNewsSelector = useSelector(state => state.customSearch);
  const dispatch = useDispatch();
  //   const getCustomNews = (source, relevance) =>
  //     dispatch(fetchCustomNews(source, relevance));

  const getSources = () => {
    fetch("https://newsapi.org/v1/sources?")
      .then(res => {
        console.log(customNewsSelector.customNews);
        return res.json();
      })
      .then(response => {
        console.log(response);
        setSource(response);
      });
  };
};
export default Main;
