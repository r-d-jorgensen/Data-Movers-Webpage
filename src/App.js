import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Main from "./pages/Main";
import PhotoDisplay from "./pages/PhotoDisplay";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="settings" element={<Settings />} />
          <Route path="userID" element={<Main />} />
          <Route path="userID/photoDisplay" element={<PhotoDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
