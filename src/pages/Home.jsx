import React from "react";
import axios from "axios";
// import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import "./home.css";
// import HomeTemplate from "../templates/HomeTemplate";

// const baseURL = "https://fakestoreapi.com/products";

function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setData(response.data);
  //   });
  // }, []);
  // console.log(data);
  // const newData = data.map((e, i) => {
  //   return <HomeTemplate category={e.category} />;
  // });

  return (
    <div className="home-container">
      {/* {newData} */}
      <div className="menu">
        <ul>
          <NavLink to="/mensclothing"><li>Men's Clothing</li></NavLink>
          <NavLink to="/womansclothing"><li>Woman's clothing</li></NavLink>
          <NavLink to="/electronic"><li>Electronic</li></NavLink>
          <NavLink to="/jewelery"><li>Jewelery</li></NavLink>
        </ul>   
      </div>
      <div className="home-content">CONTENT</div>
    </div>
  );
}

export default Home;
