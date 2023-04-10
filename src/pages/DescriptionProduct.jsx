import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DescriptionTemplate from "../templates/DescriptionTemplate";
import "./descriptionProduct.css";

const mainURL = "https://fakestoreapi.com/products";

const DescriptionProduct = () => {
  const { category, id } = useParams();
  // const [data, setData] = useState(id);
  const [dataDescription, setDataDescription] = useState([]);
  useEffect(() => {
    axios.get(mainURL).then((response) => {
      setDataDescription(response.data);
    });
  }, []);
  console.log(dataDescription);

  const descriptionProduct = dataDescription
    // .filter((element) => element.id === id)
    .map((e) => {
      // console.log(typeof id);
      if (e.id == id){
      return <DescriptionTemplate description={e.description} key={e.id} />;
      }
    });
  // console.log(dataDescription);

  return (
    <div>
         {descriptionProduct}   
    </div>
  );
};

export default DescriptionProduct;
