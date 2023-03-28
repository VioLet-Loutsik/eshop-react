import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardTemplate from "../templates/CardTemplate";

const baseURL = "https://fakestoreapi.com/products";

function MensClothing() {
  const [dataMensCl, setMensCl] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMensCl(response.dataMensCl);
    });
  }, []);
  console.log(dataMensCl);

  const newMensClothing = dataMensCl.map((e) => {
    return (
      <CardTemplate
        title={e.title}
        price={e.price}
        description={e.description}
        image={e.image}
        key={e.id}
      />
    );
  });
  
  return <div>{newMensClothing}</div>;
}

export default MensClothing;
