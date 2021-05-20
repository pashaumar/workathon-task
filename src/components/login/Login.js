import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styles from "./Login.module.css";
import * as ROUTES from "../../constants/routes";
function Login() {
  const getLoginCredentials = localStorage.getItem("loginCredentials");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailedError, setLoginFailedError] = useState("");

  //   useEffect(() => {
  //     if (localStorage.getItem("accessToken") !== null) {
  //       const path = "dashboard";
  //       history.push(path);
  //       return;
  //     }
  //   }, []);

  const history = useHistory();

  const handleSignInClick = () => {
    if (getLoginCredentials === null) {
      setLoginFailedError("You don't have account, please register");
      return;
    }
  };
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.login}>
        <div className={styles.loginHead}>
          <h3>Login</h3>
        </div>
        <div className={styles.LoginInput}>
          <div className={styles.userName}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <i className="fas fa-user"></i>
          </div>
          <div className={styles.password}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fas fa-lock"></i>
          </div>
          {loginFailedError !== "" && (
            <p className={styles.loginFailedError}>{loginFailedError}</p>
          )}
          <div className={styles.buttons}>
            <button className={styles.logIn} onClick={handleSignInClick}>
              Log In
            </button>

            <button className={styles.goToSignUpPage}>
              Don't have account? <Link to={ROUTES.REGISTER}>Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
