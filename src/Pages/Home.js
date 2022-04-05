import React, { useEffect, useState } from "react";
import ArticleCard from "../Components/ArticleCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AlertBanner from "../Components/AlertBanner";

import { Colors } from "../Variables/Colors";

const fetchArticles = async () => {
  const response = await fetch("/api/articles.php");
  const data = await response.json();
  console.log(data);
  return data;
};

export default function Home() {
  const [articles, setArticles] = useState([
    {
      ID: "0",
      Author: "Joe (Admin)",
      Date: "laden",
      Tags: [],
      Title: "Artikel laden...",
      Content: "",
    },
  ]);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <div style={styles.container}>
      <Header />
      <AlertBanner />
      <div style={styles.articles}>
        {articles.map((article) => (
          <ArticleCard
            key={article.ID}
            id={article.ID}
            title={article.Title}
            author={article.Author}
            date={article.Date}
            tags={article.Tags}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: Colors.background,
  },
  articles: {
    alignSelf: "center",
  },
};
