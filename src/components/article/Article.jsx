import React from "react";
import "./article.css";

const Article = ({ imageurl, date, title }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={imageurl} alt="blog image" />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
