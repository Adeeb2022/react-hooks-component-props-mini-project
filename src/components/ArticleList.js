import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

export default function ArticleList() {
  const allArticles = blogData.posts.map((arr) => {
    return (
      <Article
        key={arr.id}
        title={arr.title}
        date={arr.date}
        preview={arr.preview}
        minutes={arr.minutes}
      />
    );
  });
  return <main>{allArticles}</main>;
}
