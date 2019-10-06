import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTech } from "../actions/fetch_tech";

const Tech = () => {
  const techNews = useSelector(state => state.fetchTech.techNews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTech());
  }, [dispatch]);

  return (
    <section>
      <h2>Technology News</h2>
      <div className="news">
        {techNews.map(({ title, urlToImage, description }) => (
          <div className="post" key={title}>
            <img src={urlToImage} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
