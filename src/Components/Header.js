import React from "react";
import { Colors } from "../Variables/Colors";

export default function Header() {
  return (
    <div style={styles.container}>
      <img src={require("../logo.png")} alt="logo" style={styles.logo} />
      <ul style={styles.nav}>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>
            Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a
            href="https://jo-dev.de"
            target="_blank"
            rel="noreferrer"
            style={styles.navLink}
          >
            Über mich
          </a>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "8vh",
    backgroundColor: Colors.invertText,
  },
  logo: {
    height: "100%",
    padding: "0 1rem",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "6rem",
  },
  navItem: {
    marginLeft: "3rem",
    listStyle: "none",
  },
  navLink: {
    color: Colors.accent1,
    fontSize: "1.2rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
