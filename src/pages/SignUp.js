import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../services/userService.js";
import "./LogIn.css"; // TODO: update or consolidate forms, css and classnames

const SignUp = ({ setUserData }) => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  // TODO: catch no response and other errors
  const handleSignUp = async (e) => {
    e.preventDefault();
    const auth = await createNewUser(username, password, email);
    
    if (auth.isAuthed) {
      setUserData(auth);
      navigate("/dashboard");
    } else setError(auth.error);
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="title">Sign Up</div>
        <form className="form" onSubmit={handleSignUp}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="username" onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="input-container">
            <label>Email </label>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="button-container">
            <input type="submit" name="Sign Up"></input>
          </div>
          <div className="error">{error}</div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;