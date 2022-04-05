import React from "react";
import { Colors } from "../Variables/Colors";

export default function Header() {
  return (
    <div style={styles.container}>
      <h1 style={styles.alert}>
        Dieser Blog ist aktuell noch in der Entwicklung!
      </h1>
      <p style={styles.explenation}>
        Er ist trotzdem online, um den Eintwicklungsprozess zu zeigen.
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.accent3,
  },
  alert: {
    margin: "0.3rem",
    textAlign: "center",
    color: Colors.accent2,
    fontSize: "1.2rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  explenation: {
    margin: "0.3em",
    textAlign: "center",
    color: Colors.Text,
    fontSize: "1rem",
  },
};
