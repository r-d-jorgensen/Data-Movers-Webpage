import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../services/userService.js";
import "./LogIn.css";

const LogIn = () => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = userService.userData;
    userService.logInUser(username, password);
    if (user.isAuthed) {
      navigate("/dashboard");
    } else setError(user.error);
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="title">Log In</div>
        <form className="form" onSubmit={handleLogin}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="username" onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="button-container">
            <input type="submit" name="Log in"></input>
          </div>
          <div className="error">{error}</div>
        </form>
        <Link to="/signUp">Sign Up</Link>
      </div>
    </div>
  );
};

export default LogIn;
