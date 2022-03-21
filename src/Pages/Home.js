import React from "react";
import ArticleCard from "../Components/ArticleCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { Colors } from "../Variables/Colors";

export default function Home() {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.articles}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
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
