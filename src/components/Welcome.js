import React, { Component } from "react";
import styles from "../styles/Welcome.module.css";
class Welcome extends Component {
  render() {
    return <div className={styles.welcome}>Welcome to Counter App</div>;
  }
}
export default Welcome;
