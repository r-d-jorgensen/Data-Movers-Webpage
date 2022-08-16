import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Protected from "./components/ProtectedRoute";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import PhotoDisplay from "./pages/PhotoDisplay";
import './App.css';
import Navbar from "./components/Navbar";

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} logOut={logOut} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn logIn={logIn}/>} />
        <Route path="settings" exact element={
          <Protected isLoggedIn={isLoggedIn}>
            <Settings />
          </Protected>
        } />
        <Route path="dashboard" exact element={
          <Protected isLoggedIn={isLoggedIn}>
            <Dashboard />
          </Protected>
        } />
        <Route path="dashboard/photoDisplay" exact element={
          <Protected isLoggedIn={isLoggedIn}>
            <PhotoDisplay />
          </Protected>
        } />
      </Routes>
    </Router>
  );
}
