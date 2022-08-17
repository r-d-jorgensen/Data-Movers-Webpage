import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Protected from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import PhotoDisplay from "./pages/PhotoDisplay";
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({isAuthed: false, token: "", user: {}});

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
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
