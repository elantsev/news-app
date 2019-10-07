import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTech } from "../actions/fetch_tech";
import { News } from "./News";

const Tech = () => {
  const techNews = useSelector(state => state.fetchTech.techNews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTech());
  }, [dispatch]);

  return (
    <section>
      <h2>Technology News</h2>
      <News news={techNews} />
    </section>
  );
};

export default Tech;
