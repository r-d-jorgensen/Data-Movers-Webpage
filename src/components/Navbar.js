import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

// stop navbar from showing login button on login page ?mabye use location?
const Navbar = ({userData, setUserData}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoging = () => {
    if (userData.isAuthed) {
      setUserData({isAuthed: false, token: "", user: {}});
      navigate("/");
    } else navigate("/login");
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        {location.pathname !== "/login" ? <button onClick={handleLoging}>{userData.isAuthed ? "Log Out": "Log In"}</button> : null}
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;