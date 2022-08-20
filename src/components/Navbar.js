import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import userService from "../services/userService.js";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthed = userService.userData.isAuthed;

  const handleLoging = () => {
    if (isAuthed) navigate("/");
    else navigate("/login");
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        {location.pathname !== "/login" ? <button onClick={handleLoging}>{isAuthed ? "Log Out": "Log In"}</button> : null}
      </nav>
      <span style={{ bottom: '0%', right: '0%', position: 'fixed' }}>
        ver - {process.env.REACT_APP_VERSION}
      </span>
      <Outlet />
    </>
  )
};

export default Navbar;