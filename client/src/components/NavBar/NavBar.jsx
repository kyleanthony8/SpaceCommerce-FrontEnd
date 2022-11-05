import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/search">
        <div>Search</div>
      </Link>
      <Link to="/createListing">
        <div>Create Listing</div>
      </Link>
      <Link to="/account">
        <div>Account</div>
      </Link>
    </div>
  );
}

export default NavBar;