import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../images/e.jpg";
import preferable from "../images/hearts.jpg";
import bag from "../images/shopping-cart.jpg";
import user from "../images/userred.jpg";
import search from "../images/search.jpg";
import delivery from "../images/delivery.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-info">
        <div className="header-icon-group">
          <div className="header-delivery-grup">
            <div className="header-icon-top">
              <img src={delivery} alt="delivery" />
            </div>
            <div className="header-contact-text">
              <p>Delivery</p>
            </div>
          </div>
          <div>
            <div className="header-contact-text">
              <p>eUpgrade</p>
            </div>
          </div>
        </div>

        <div className="header-icon-top">
          <NavLink to="/">
            <img src={logo} alt="alt" />
          </NavLink>
        </div>

        <div className="header-contact">
          <div className="header-contact-circle">
            <div className="circle"></div>
            <div>
              <p className="header-contact-text">We work today</p>
              <p>
                <b>09:00 - 20:00</b>
              </p>
            </div>
          </div>

          <div className="header-marketig">
            <div className="header-marketig-visible-block">
              <p className="header-contact-text">Sales marketing</p>
              <p>
                <b>0 (68) 800 900</b>
              </p>
            </div>
            <div className="header-marketig-invisible-block">
              <ul>
                <li>Sales marketing</li>
                <li>0 (68) 800 900</li>
                <li>0 (22) 44 66 99</li>
                <li>Corporate sales :</li>
                <li>0 (68) 800 921</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-group">
        <div className="header-icon-group">
          <h3>katalog</h3>
        </div>

        <div className="header-icon-group">
          <img src={search} alt="search" className="icon-search"></img>
          <input
            type="search"
            id="search"
            placeholder="Search in eshop..."
            className="search-text"
          />
        </div>

        <div className="header-right-block">
          <div className="header-icon-group">
            <div className="header-icon">
              <img src={user} alt="user" />
            </div>
            <div className="header-name-user">
              <h5>HI USER</h5>
            </div>
          </div>
          <div className="header-icon-group">
            <div className="header-icon">
              <img src={preferable} alt="preferable" />
            </div>
            <div className="header-icon">
              <NavLink to="/basket">
                <img src={bag} alt="preferable" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
