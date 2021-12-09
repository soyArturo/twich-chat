import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    console.log(username, password, confirmPassword);
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    setError(false);
  }
  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <div>
          <img className="auth-container-box-logo" src={Logo} alt="logo" />
        </div>
        <div className="auth-container-form">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin &&<input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="Password Confirmation"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />}
          {error && <p>Passwords do not match</p>}
          <button onClick={handleSubmit}>Go!</button>
        </div>
        <div className="auth-options">
          <button onClick={() => setIsLogin(false)}>Sign Up</button>
          <button onClick={() => setIsLogin(true)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
