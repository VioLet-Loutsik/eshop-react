import React, { useState, useEffect } from "react";
import axios from "axios";
import "./products.css";
import CardTemplate from "../templates/CardTemplate";
import { useParams } from "react-router-dom";

const baseURL = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const [data, setData] = useState([]);
  // const [basket, setBasket] = useState([]);
  // const handleSelect = (item) => {
  //   setBasket((prev) => [...prev, item]);
  // };
  // сначала получаем из обьекта строку
  // const stringArray = JSON.stringify(basket);
  // проверяем
  // localStorage.setItem("productAdded", stringArray);
  // или такая запись укороченная
  // localStorage.setItem("productAdded", JSON.stringify(basket));

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  const { category } = useParams();
  // console.log(category);
  const newProduct = data
    .filter((elem) => elem.category === category)
    .map((e) => {
      // console.log(typeof e.id);
      return (
        <CardTemplate
          title={e.title}
          price={e.price}
          description={e.description}
          image={e.image}
          key={e.id}
          category={e.category}
          id={e.id}
          // onSelect={handleSelect}
        />
      );
    });

  return (
    <div>
      <div className="mens-clothes">{category}</div>
      <div className="single-product-block">{newProduct}</div>
    </div>
  );
};

export default SingleProduct;
