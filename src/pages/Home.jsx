import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./home.css";
// import MenuProducts from "../templates/MenuTemplate";
import { useParams } from "react-router-dom";
import HomeTemplate from "../templates/HomeTemplate";

// import HomeTemplate from "../templates/HomeTemplate";

const baseURL = "https://fakestoreapi.com/products";

function Home() {
  const [data, setData] = useState([]);
  const { category } = useParams(); 
  console.log(useParams());

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  const categoryProduct = data
    .filter((elem) => elem.category === category)
    .map((e) => {
      console.log(e.categoryProduct[0]);

    return <HomeTemplate category={e.category[0]}/>
  });

return (
    <div className="home-container">
         <div className="menu">
     { categoryProduct }
     </div>
      <div className="home-content">CONTENT</div>
    </div>
   
  );
  };

export default Home;

// const [data, setData] = useState([]);

// useEffect(() => {
//   axios.get(baseURL).then((response) => {
//     setData(response.data);
//   });
// }, []);
// console.log(data);
// const newData = data.map((e, i) => {
//   return <HomeTemplate category={e.category} />;



      /* <NavLink to="/mensclothing"><li>Men's Clothing</li></NavLink> */
          /* <NavLink to="/womansclothing"><li>Woman's clothing</li></NavLink> */
          /* <NavLink to="/electronic"><li>Electronic</li></NavLink> */
          /* <NavLink to="/jewelery"><li>Jewelery</li></NavLink> */