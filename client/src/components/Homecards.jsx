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
        <div className="cont">


          <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="">
          
        </p>
        
      </div>
      
      
        <span className="text-gradient">See More Listings</span>
      
    </div>
  </div>
        


        </div>
      </NavLink>
    </div>
  );
};

export default Homecards;
