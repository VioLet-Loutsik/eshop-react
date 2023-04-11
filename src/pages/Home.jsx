import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import HomeTemplate from "../templates/HomeTemplate";


const baseURL = "https://fakestoreapi.com/products/categories";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, [baseURL]);
// console.log(data);
  const categoryProduct = data
    .map((e) => {
    return <HomeTemplate category={e} key={e.id}/>
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
