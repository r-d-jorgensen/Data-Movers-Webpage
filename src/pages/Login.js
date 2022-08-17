import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../services/userService.js";
import "./LogIn.css";

const LogIn = ({ setIsLoggedIn }) => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = await logInUser(username, password);
    
    if (auth.isAuthed) {
      setIsLoggedIn(auth);
      navigate("/dashboard");
    } else setError(auth.error);
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="title">Sign In</div>
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
            <button type="submit">Log in</button>
          </div>
          <div className="error">{error}</div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;