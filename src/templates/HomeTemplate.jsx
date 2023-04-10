import React from "react";
import { NavLink } from "react-router-dom";

const HomeTemplate = ({ category, id }) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={`/product/${category}`}>{category}</NavLink>

          {/* <NavLink to={`/test`}>TESTARE</NavLink> */}
        </li>
      </ul>
    </div>
  );
};

export default HomeTemplate;
