import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { CodeBlock, dracula } from "react-code-blocks";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AlertBanner from "../Components/AlertBanner";

import { Colors } from "../Variables/Colors";

const fetchArticleData = async (artID) => {
  const response = await fetch("/api/articles.php?id=" + artID);
  const data = await response.json();
  console.log(data);
  return data;
};

export default function Article(props) {
  const { id } = useParams();

  const [article, setArticle] = useState({
    ID: "0",
    Author: "Joe (Admin)",
    Date: "laden",
    Tags: [],
    Title: "Artikel laden...",
    Content: "",
  });

  useEffect(() => {
    fetchArticleData(id).then((data) => {
      data.Tags = data.Tags.split(",");
      setArticle(data);
    });
  }, []);

  return (
    <div style={styles.container}>
      <Header />
      <AlertBanner />
      <div style={styles.top}>
        <div style={styles.meta}>
          <span style={styles.articleAuthor}>{article.Author}</span>
          <span style={styles.articleDate}> am {article.Date}</span>
        </div>
        <h1 style={styles.title}>{article.Title}</h1>
        <div style={styles.articleTags}>
          {article.Tags.map((tag) => (
            <span key={tag} style={styles.articleTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Markdown
        children={article.Content}
        options={{
          overrides: {
            CodeBlock: {
              component: CodeBlock,
              props: {
                theme: dracula,
                customStyle: styles.code,
              },
            },
          },
        }}
        style={styles.content}
      >
        {article.Content}
      </Markdown>
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
  top: {
    backgroundColor: Colors.invertText,
    borderRadius: "0 0 10px 10px",
    padding: "1.5rem",
  },
  meta: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "0.5rem",
  },
  articleAuthor: {
    color: Colors.accent2,
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  articleDate: {
    color: Colors.accent2,
    fontSize: "1.2rem",
    paddingLeft: "1rem",
  },
  title: {
    padding: "0.5rem",
    margin: "0",
    color: Colors.accent1,
    fontSize: "2.5rem",
    textAlign: "center",
  },
  articleTags: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  articleTag: {
    color: Colors.text,
    fontSize: "1rem",
    margin: "0.3rem",
    backgroundColor: Colors.accent2,
    padding: "0.2rem 0.5rem 0.2rem 0.5rem",
    borderRadius: "0.5rem",
  },
  content: {
    color: Colors.text,
    backgroundColor: Colors.accentBackground,
    borderRadius: "1rem",
    margin: "1rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  code: {
    maxWidth: "60rem",
    marginTop: "1em",
    marginBottom: "1em",
  },
};
