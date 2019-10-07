import React from "react";

export const News = ({ news }) => (
  <div className="news">
    {news.map(({ title, urlToImage, description }) => (
      <div className="post" key={title}>
        <img src={urlToImage} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    ))}
  </div>
);
