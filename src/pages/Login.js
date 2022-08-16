import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = ({ logIn }) => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  // needs to talk to server
  const callServer = (username, password) => {
    if (username === "bob" && password === "123") return true;
    return false;
  }

  const handleLogin = (e) => {
    // should use promises
    e.preventDefault();
    const serverResponse = callServer(username, password);
    if (serverResponse) {
      logIn();
      navigate("/dashboard");
    } else {
      setError("Login Credentais Invalid");
    }
    
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