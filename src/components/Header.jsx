import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../images/logo.jpg";
import preferable from "../images/hearts.jpg";
import bag from "../images/shopping-cart.jpg";
import user from "../images/user.jpg";
import search from "../images/search.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-icon">
        <NavLink to="/" >
          <img src={logo} alt="alt" />
        </NavLink>
      </div>

      <div className="header-group">
        <div className="header-icon">
          <img src={user} alt="user" />
        </div>
        <div className="header-name-user">HI USER</div>
      </div>

      <div className="header-group-search">
        {/* <div className="icon-search"> */}
          <img src={search} alt="search" className="icon-search"></img>
        {/* </div> */}
        {/* <div className="search-field"> */}
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className="search-text"
          />
        {/* </div> */}
      </div>

      <div className="header-group">
        <div className="header-icon">
          <img src={preferable} alt="preferable" />
        </div>
        <div className="header-icon">
          <img src={bag} alt="preferable" />
        </div>
      </div>
    </div>
  );
};

export default Header;
