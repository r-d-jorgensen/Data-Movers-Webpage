import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInUser } from "../services/userService.js";
import "./LogIn.css";

const LogIn = ({ setUserData }) => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  // TODO: catch no response and other errors
  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = await logInUser(username, password);
    console.log(auth);
    if (auth.isAuthed) {
      setUserData(auth);
      navigate("/dashboard");
    } else setError(auth.error);
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
