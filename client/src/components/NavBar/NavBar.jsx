import "./NavBar.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { signOut } from "../../services/user";
import { useAuthContext } from "../../hooks/useAuthContext";

function NavBar() {
  const { dispatch } = useAuthContext()

  const SignOut = () => {
    signOut()
    dispatch({ type: 'LOGOUT'})
  }
  
  return (
    <nav>
      <NavLink to="/">
        <img src={Logo} alt="hoobank" className="home" />
      </NavLink>
      <div className="right">
      <button onClick={SignOut}>Sign Out</button>
        <NavLink to="/createListing">
          <div className="navLinks">Create Listing</div>
        </NavLink>
        <NavLink to="/allListing">
          <div className="navLinks">All Listing</div>
        </NavLink>
        <NavLink to="/account">
          <div className="navLinks">Account</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
