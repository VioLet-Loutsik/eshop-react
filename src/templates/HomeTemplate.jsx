import React from 'react'
import { NavLink } from "react-router-dom";

const HomeTemplate = ({ category }) => {
  return (
 <div>
    <ul>
      <li><NavLink to={`/mensclothing/${category}`}>Men's Clothing</NavLink></li>
      <li><NavLink to={`/womansclothing/${category}`}>Woman's clothing</NavLink></li>
      <li><NavLink to={`/jewelery/${category}`}>Electronic</NavLink></li>
      <li><NavLink to={`/electronic/${category}`}>Jewelery</NavLink></li>        

    </ul>
  </div>
  )
}

export default HomeTemplate