import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import { useHistory, Link } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
function Admin() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === null) {
      const path = "login";
      history.push(path);
    }
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Admin;
