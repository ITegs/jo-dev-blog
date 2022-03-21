import React from "react";
import { Colors } from "../Variables/Colors";

export default function Header() {
  return (
    <div style={styles.container}>
      <a
        href="https://jo-dev.de/impressum.html"
        target="_blank"
        rel="noreferrer"
        style={styles.link}
      >
        Impressum
      </a>
      <a
        href="https://jo-dev.de/datenschutz.html"
        target="_blank"
        rel="noreferrer"
        style={styles.link}
      >
        Datenschutz
      </a>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "8vh",
    backgroundColor: Colors.accentBackground,
  },
  link: {
    color: Colors.accent1,
    fontSize: "1.2rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
