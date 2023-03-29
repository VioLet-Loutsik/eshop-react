import React from "react";
import './products.css'
// import { useState, useEffect } from "react";
// import axios from "axios";
// import CardTemplate from "../templates/CardTemplate";
// import { useParams } from "react-router-dom";

// const baseURL = "https://fakestoreapi.com/products";

function MensClothing() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setData(response.data
  //       );
  //   });
  // }, []);
  // console.log(data);
  // const { category } = useParams();
  // console.log(useParams());
  // const newMensClothing = setData
  // .filter((elem) => elem.category === category)
  // .map((e) => {

  //   console.log((e.title[0]));
  //   return (
  //     <CardTemplate
  //       title={e.title}
  //       price={e.price}
  //       description={e.description}
  //       image={e.image}
  //       key={e.id}
  //     />
  //   );
  // });
  


  // return <div>{newMensClothing}</div>;


  return   <div className='mens-clothes'>MEN's CLOTHES</div>

}

export default MensClothing;
