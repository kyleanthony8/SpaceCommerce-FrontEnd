import React from "react";
import SpaceItem from "../screens/allList/SpaceItem";
import "./Homecards.css";
import { NavLink, useNavigate } from "react-router-dom";

const Homecards = () => {
  
  return (
    <div>
      <SpaceItem />
      <NavLink to="/allListing">
        <div className="cont">
          <div className="seeMore">
            <h2>See All Listings</h2>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Homecards;
