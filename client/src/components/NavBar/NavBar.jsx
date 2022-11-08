import "./NavBar.css";
import Logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut, deleteUser } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function NavBar() {
  const { dispatch } = useAuthContext()
  let navigate = useNavigate();

  const SignOut = () => {
    signOut()
    dispatch({ type: 'LOGOUT' })
    navigate("/", { replace: true });
  }

  const DeleteUser = () => {
    deleteUser()
    dispatch({ type: 'LOGOUT' })
    navigate("/", { replace: true });
  }
  
  return (
    <nav>
      <NavLink to="/">
        <img src={Logo} alt="hoobank" className="home" />
      </NavLink>
      <div className="right">
        <button onClick={SignOut}>Sign Out</button>

        <button onClick={DeleteUser}>delete User</button>
        <NavLink to="/signIn">
          <div className="navLinks">Sign In</div>
        </NavLink>
        <NavLink to="/SignUp">
          <div className="navLinks">Sign Up</div>
        </NavLink>
        <NavLink to="/createListing">
          <div className="navLinks">Create Listing</div>
        </NavLink>
        <NavLink to="/allListing">
          <div className="navLinks">All Listing</div>
        </NavLink>
        <NavLink to="/account/">
          <div className="navLinks">Account</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

