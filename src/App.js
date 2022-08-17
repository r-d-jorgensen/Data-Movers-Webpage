import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Protected from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp"
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import PhotoDisplay from "./pages/PhotoDisplay";
import './App.css';

export default function App() {
  const [userData, setUserData] = useState({isAuthed: false, token: "", user: {}});

  return (
    <Router>
      <Navbar userData={userData} setUserData={setUserData} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn setUserData={setUserData} />} />
        <Route path="/signUp" element={<SignUp setUserData={setUserData} />} />
        <Route path="settings" exact element={
          <Protected userData={userData}>
            <Settings />
          </Protected>
        } />
        <Route path="dashboard" exact element={
          <Protected userData={userData}>
            <Dashboard />
          </Protected>
        } />
        <Route path="dashboard/photoDisplay" exact element={
          <Protected userData={userData}>
            <PhotoDisplay />
          </Protected>
        } />
      </Routes>
    </Router>
  );
}
