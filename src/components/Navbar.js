import { Outlet, Link, useNavigate } from "react-router-dom";

// stop navbar from showing login button on login page ?mabye use location?
const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();

  const handleLoging = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
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
        <button onClick={handleLoging}>{isLoggedIn ? "Log Out": "Log In"}</button>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;