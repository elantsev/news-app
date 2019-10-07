import React from "react";

export const News = ({ news }) => (
  <div className="news">
    {news.map(({ title, urlToImage, description, publishedAt, url }) => (
      <div className="post" key={title}>
        <img src={urlToImage} alt={title} />
        <h2>
          <a href={url}>{title}</a>
        </h2>
        {publishedAt && <p>{`published: ${publishedAt.slice(0, 10)}`}</p>}
        <p>{description}</p>
      </div>
    ))}
  </div>
);
