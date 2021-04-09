import React, { useState } from "react";
import "../base.css";
import "./Card.css";
import CodeContainer from "./CodeContainer";
import Description from "./Description";
import "./Heading.css";

function Card() {

  const [selected, setSelected] = useState('card')

  const card = `
  <div class="card">
  <img
    alt="model"
    src="https://bit.ly/2NY8Tx4"
  ></img>
  <div class="productInfo">
    <p>Product Name</p>
    <small>A short description</small>
    <small>Rating: 4.5/5</small>
    <p>₹2999</p>
    <small>Instock</small>
  </div>
  <button class="primary-button darkBlue">Add To Cart</button>
  <span class="badge">New!</span>
  <span class="heart">
    <img
      class="ecomm__icon"
      src="https://bit.ly/3rtgodg"
      alt="white heart"
    />
  </span>
</div>
  `;

  const card2 = `
  <div class="card2">
    <img alt="prod" src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/card%20component/prod2.jpeg?raw=true" />
    <span class="card2__brand">Adidas</span>
    <span>Flat 80% OFF</span>
  </div>
  `

  let copyCode;
  switch (selected) {
    case "card":
      copyCode = card;
      break;
    case "card2":
      copyCode = card2;
      break;
    default:
      break;
  }

  return (
    <div className="Card__container">
      <h1 className="title">Cards</h1>
      <Description desc="Card is used to display information about any person/product/etc." />
      <div className="card" onClick={() => setSelected("card")}>
        <img alt="model" src="https://bit.ly/2NY8Tx4"></img>
        <div className="productInfo">
          <p>Product Name</p>
          <small>A short description and a very nice description that will blow your mind!!</small>
          <small>Rating: 4.5/5</small>
          <p>₹2999</p>
          <small>Instock</small>
        </div>
        <button className="primary-button darkBlue">Add To Cart</button>
        <span className="badge">New!</span>
        <span className="heart">
          <img
            class="ecomm__icon"
            src="https://bit.ly/3rtgodg"
            alt="white heart"
            style={{ height: "2rem", width: "2rem" }}
          />
        </span>
      </div>
      <div className="card2" onClick={() => setSelected("card2")}>
        <img alt="prod" src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/card%20component/prod2.jpeg?raw=true" />
        <span className="card2__brand">Adidas</span>
        <span>Flat 80% OFF</span>
      </div>
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default Card;
