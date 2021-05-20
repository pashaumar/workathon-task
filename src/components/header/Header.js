import React, { useState } from "react";
import styles from "./Header.module.css";
import { useHistory } from "react-router-dom";
function Header({ showSidebar, setShowSidebar }) {
  const history = useHistory();

  const [showDropDown, setShowDropDown] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    const path = "login";
    history.push(path);
  };
  const showSidebarArrowStyle = () => {
    if (showSidebar) {
      return {
        transform: "rotate(180deg)",
      };
    }
  };
  return (
    <div className={styles.header}>
      <div
        className={styles.showSidebarArrow}
        onClick={() => setShowSidebar((prev) => !prev)}
        style={showSidebarArrowStyle()}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
      <h1>Admin Header</h1>
      <div className={styles.dropDown}>
        <button onClick={() => setShowDropDown((prev) => !prev)}>
          {showDropDown ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        {showDropDown && (
          <div className={styles.dropDownContent}>
            <div>Profile</div>
            <div>Change Password</div>
            <div onClick={handleLogOut}>Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
