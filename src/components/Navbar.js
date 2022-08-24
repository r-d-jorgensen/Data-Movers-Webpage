import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { logoutUser, checkAuth } from "../services/userService.js";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoging = () => {
    if (checkAuth()) {
      logoutUser();
      navigate("/");
    }
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
        {location.pathname !== "/login" ? <button onClick={handleLoging}>{checkAuth() ? "Log Out": "Log In"}</button> : null}
      </nav>
      <Outlet />
    </>
  )
};

export default Navbar;