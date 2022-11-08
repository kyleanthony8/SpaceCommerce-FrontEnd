import "./NavBar.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { signIn, signOut } from "../../services/user";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <img src={Logo} alt="hoobank" className="home" />
      </NavLink>
      <div className="right">
      <button onClick={signOut}>Sign Out</button>
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
