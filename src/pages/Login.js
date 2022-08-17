import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { logInUser } from "../services/UserService";
import "./LogIn.css";

import axios from "axios";
import serverEndpoint from "../utils/serverEndpoint";

const LogIn = ({ setIsLoggedIn }) => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get(`${serverEndpoint}/api/user/login/${username}/${password}`)
      .then((response) => {
        if (response.data.isAuthed) {
          setIsLoggedIn(true);
          navigate("/dashboard");
        } else setError(response.error);
      })
      .catch((error) => console.log(error));
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