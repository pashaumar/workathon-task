import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
    </div>
  );
}
export default Sidebar;
