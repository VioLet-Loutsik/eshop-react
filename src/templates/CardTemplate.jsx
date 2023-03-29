import React from "react";
import Button from "react-bootstrap/Button";
import './cardTemplate.css'

function CardTemplate({ title, price, description, image, id }) {
  return (
    <div className="card-template" key={id}>
      <p>{title}</p>
      <img src={image} alt="image" className="image-product" />
      <p className="description">{description}</p>
      <div className="priceButton">
        <p>{price}</p>
        <Button variant="success">Alege</Button>{" "}
      </div>
    </div>
  );
}

export default CardTemplate;

