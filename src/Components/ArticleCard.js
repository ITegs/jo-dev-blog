import React from "react";
import { Colors } from "../Variables/Colors";

export default function ArticleCard() {
  let curDate = new Date();
  curDate = curDate.toLocaleDateString("de-DE");
  return (
    <div style={styles.container}>
      <h2 style={styles.articleTitle}>Wie findet man gute Beispiel-Texte?</h2>
      <div style={styles.authDate}>
        <span style={styles.articleAuthor}>Joe</span>
        <span style={styles.articleDate}>am {curDate}</span>
      </div>
      <div style={styles.articleTags}>
        <span style={styles.articleTag}>#software</span>
        <span style={styles.articleTag}>#frontend</span>
        <span style={styles.articleTag}>#react</span>
      </div>
      <button style={styles.readMore}>
        <span style={styles.readMoreText}>Mehr lesen</span>
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "85vw",
    maxWidth: "45rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.accentBackground,
    padding: "1rem",
    margin: "1rem",
    borderRadius: "1rem",
  },
  articleTitle: {
    color: Colors.accent1,
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.7rem",
    textAlign: "center",
  },
  authDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  articleAuthor: {
    color: Colors.text,
    fontSize: "1.2rem",
    fontWeight: "bold",
    paddingRight: "0.6rem",
  },
  articleDate: {
    color: Colors.text,
    fontSize: "1.0rem",
  },

  articleTags: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  articleTag: {
    color: Colors.text,
    fontSize: "1rem",
    marginBottom: "0.5rem",
    marginRight: "0.3rem",
    marginLeft: "0.3rem",
    backgroundColor: Colors.accent2,
    padding: "0.2rem 0.5rem 0.2rem 0.5rem",
    borderRadius: "0.5rem",
  },
  readMore: {
    backgroundColor: Colors.accent1,
    fontWeight: "bold",
    padding: "0.5rem 1rem 0.5rem 1rem",
    borderRadius: "0.5rem",
    marginTop: "1rem",
    marginRight: "1rem",
    alignSelf: "end",
  },
  readMoreText: {
    color: Colors.text,
    fontSize: "1rem",
    fontWeight: "bold",
  },
};
