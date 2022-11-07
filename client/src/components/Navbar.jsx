import { React, useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <NavLink to="/">
        <img src={Logo} alt="hoobank" className="w-[124px] h-[124px]" />
        </NavLink>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <NavLink to={`/${nav.id}`}>{nav.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;