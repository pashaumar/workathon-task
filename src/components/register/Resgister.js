import React, { useState, useMemo, useEffect } from "react";
import styles from "./Register.module.css";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [registerFailedError, setRegisterFailedError] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      const path = "admin";
      history.push(path);
      return;
    }
  }, []);

  const handleRegister = () => {
    if (userName === "" || password === "") {
      setRegisterFailedError("atleast enter username and password");
      return;
    }
    localStorage.setItem(
      "loginCredentials",
      JSON.stringify({
        userName: userName,
        password: password,
      })
    );
    const path = "login";
    history.push(path);
  };
  return (
    <div className={styles.registerContainer}>
      <div className={styles.register}>
        <div className={styles.registerHead}>
          <h3>Register</h3>
        </div>
        <div className={styles.registerInput}>
          <div className={styles.name}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div className={styles.email}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              value={email}
            />
          </div>
          <div className={styles.userName}>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className={styles.password}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className={styles.mobileNumber}>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone"
              onChange={(e) => setMobileNumber(e.target.value)}
              value={mobileNumber}
            />
          </div>

          {registerFailedError !== "" && (
            <p className={styles.registerFailedError}>{registerFailedError}</p>
          )}
          <div className={styles.registerButtonContainer}>
            <button className={styles.registerButton} onClick={handleRegister}>
              Register
            </button>
            <button className={styles.existingMember}>
              Already a member? <Link to={ROUTES.LOGIN}>Log In</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
