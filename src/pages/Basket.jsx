import React from "react";
import "./basket.css";
import { useState } from "react";

// вариант использования темплейта внутри одного файла
export const BasketTemplate = ({ title, image, price, id }) => {
  const [value, setValue] = useState(1);
  // console.log(value);

  // const handleChange = (event) => {
  //   setValue(event.target.value.count);
  // };

    const increase = () => {
      setValue(value + 1);
      //  console.log(value);
    };    
    const decrease = () => {
      setValue(value - 1)
    };
    const result = (value) => {
      return value * price;
    };
    const deleteProduct = (id) => {
      setValue((value) => {
        return value.filter((e) => {return id !== e.id });
    });
  };
  // console.log('deleted', {id});
  // console.log(result(value));
  
  return (
    <div className="block-basket-products">
      <div className="block-basket-image"><img src={image}></img></div>
      <div className="block-basket-info">
        <h5>{title}</h5>
        <p>Price:<b> {price}$</b></p>
      </div>
      <div className="changer-quantity-block">
        <div className="changer-quantity-price">
          <p>Total:<b> {result(value)}$</b></p>
        </div>
        <div className="changer-quantity">
          <button type="button" className="count_down" onClick={decrease}> - </button>
          <input type="number"
            className="changer-quantity-amount"
            value={value}
            // onChange={handleChange}
          ></input>
          <button type="button" className="count_up" onClick={increase}> + </button>
        </div>
        <div className="block-basket-delete">
          <div><p>Delete:</p></div>
          <div className="block-basket-delete-simbol" onClick={deleteProduct}><p>x</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// console.log(result(value));

export default function Basket() {
  // const resultBasket = localStorage.getItem("productAdded")
  // const arrayBasket = JSON.parse(resultBasket)
  // или укороченный варант
  const arrayBasket = JSON.parse(localStorage.getItem("productAdded"));
  // console.log(arrayBasket);
  const result = arrayBasket.map((e) => {
    return <BasketTemplate title={e.title} image={e.image} price={e.price} id={e.id} key={e.id}/>;
  });

  return (
    <div>
      <div className="block-basket">
        <div className="block-basket-side">
          <div className="block-basket-header">
            <h4>PRODUCTS IN THE CART</h4>
          </div>
          <div>{result}</div>
          <div className="block-basket-cost-info">
            <div className="block-basket-cost">
              <p>Cost of products</p>
              <p>1000$</p>
            </div>
            <div className="block-basket-cost">
              <p>Discount</p>
              <p>No Discount</p>
            </div>
            <div className="block-basket-cost">
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <div className="block-basket-cost block-basket-total">
              <p>Total</p>
              {/* <p>{totalElement}</p> */}
            </div>
          </div>
        </div>
        <div className="block-basket-side">
          <div className="block-basket-right-title">
            <h4>Indicate the e-mail where we will send the order details </h4>
          </div>
          <div className="block-basket-mail-block">
            <div className="block-basket-label">
              <label>E-mail</label>
            </div>
            <input type="email" className="block-basket-email"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Basket;
