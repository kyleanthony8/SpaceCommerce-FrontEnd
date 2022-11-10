import "./NavBar.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut, deleteUser } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function NavBar() {
  const { dispatch } = useAuthContext();
  const [toggle, setToggle] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const SignOut = () => {
    signOut();
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  const DeleteUser = () => {
    deleteUser();
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  const showMore = () => {
    !toggle ? setToggle(true) : setToggle(false);
  };

  return (
    <nav>
      <NavLink to="/">
        <img src={Logo} alt="hoobank" className="home" />
      </NavLink>
      <div className="right">
        <div className="navLinks nameColor">{user && `Hello, ${user.username}`}</div>
        <NavLink to="/createListing">
          <div className="navLinks">Create Listing</div>
        </NavLink>
        <NavLink to="/allListing">
          <div className="navLinks">All Listing</div>
        </NavLink>
        <button className="navLinks" onClick={showMore}>
          Account
        </button>
        {toggle && (
          <div className="more">
            {!user ? (
              <div className="options">
                <NavLink to="/signIn">
                  <div className="navLinks">Sign In</div>
                </NavLink>
                <NavLink to="/SignUp">
                  <div className="navLinks">Sign Up</div>
                </NavLink>
              </div>
            ) : (
              <div className="options">
                <button className="navLinks" onClick={SignOut}>
                  Sign Out
                </button>
                <NavLink to="/account/">
                  <div className="navLinks">User Profile</div>
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
