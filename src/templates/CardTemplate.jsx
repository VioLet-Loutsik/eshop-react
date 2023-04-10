import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./cardTemplate.css";
// import { NavLink, Link } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

// import DescriptionTemplate from "./DescriptionTemplate";

function CardTemplate({ title, price, image, id, description, category, onSelect }) {
  // const arrayBasket = []; // сначала обьявляем массив
console.log(id);
  const objectBasket = { title, image, price, id };
  const addProduct = () => {
    if (onSelect && typeof onSelect === "function") {
      onSelect(objectBasket);
    }
  };
    // собираем обьект
    // собираем массив из обьектов
    // arrayBasket.push(objectBasket);
    // setArrayBasket((prev) => [...prev, objectBasket]);
    // if (arrayBasket[id]!=undefined) {
    //   arrayBasket[id]++;
    // }else{
    //   arrayBasket[id] = 1;
    // }
    // console.log(arrayBasket);

    // сначала получаем из обьекта строку
    // const stringArray = JSON.stringify(arrayBasket);
    // проверяем
    // localStorage.setItem("productAdded", stringArray);
    // или такая запись укороченная
    // localStorage.setItem("productAdded", JSON.stringify(arrayBasket))
 
  // useEffect(() => {
  //   console.log(arrayBasket);
  // }, [arrayBasket]);
  return (
    <div className="card-template" key={id}>       
        <p className="card-template-title">{title}</p> 
        {/* <div className="card-template-image-block"> */}
        <div className="card-template-image">
        <img src={image} alt="image" />
        </div>
        <div  className="card-template-description"> 
        <NavLink to={`/product/${category}/${id}`}>Description Product</NavLink>
        </div>
        {/* </div> */}
        <div className="priceButton">
          <p className="card-template-price">{price} $</p>
          <Button variant="success" className="card-template-button" onClick={addProduct}>
            Add to cart
          </Button>
        </div>     
    </div>
  );
}

export default CardTemplate;
