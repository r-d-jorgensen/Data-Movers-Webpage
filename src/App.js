import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp"
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import PhotoDisplay from "./pages/PhotoDisplay";
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="login" element={<LogIn />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard/photoDisplay" component={<PhotoDisplay />} />
          </Route>
          <Route path="/*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
      <span style={{ bottom: '0%', right: '0%', position: 'fixed' }}>
        ver - {process.env.REACT_APP_VERSION}
      </span>
    </>
  );
}
