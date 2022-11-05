import './NavBar.css';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <div className="navLinks home">Home</div>
      </NavLink>
      <NavLink to="/search">
        <div className="navLinks">Search</div>
      </NavLink>
      <NavLink to="/createListing">
        <div className="navLinks">Create Listing</div>
      </NavLink>
      <NavLink to="/account">
        <div className="navLinks">Account</div>
      </NavLink>
    </nav>
  );
}

export default NavBar;