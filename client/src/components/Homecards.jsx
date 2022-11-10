import React from "react";
import SpaceItem from "../screens/allList/SpaceItem";
import "./Homecards.css";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../style";

const Homecards = () => {
  return (
    <div>
      <SpaceItem />
      <NavLink to="/allListing">
        <div className={`ss:hidden ${styles.flexCenter}`}></div>
        <div className="cont">
          <span className="text-gradient">See More Listings</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Homecards;
