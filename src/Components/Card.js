import React from "react";
import "../base.css";
import "./Card.css";
import CodeContainer from "./CodeContainer";
import Description from "./Description";
import "./Heading.css";

function Card() {
  const copyCode = `
  <div class="card">
  <img
    alt="model"
    src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/card%20component/prod.jpeg?raw=true"
  ></img>
  <div class="productInfo">
    <p>Product Name</p>
    <small>A short description</small>
    <small>Rating: 4.5/5</small>
    <p>₹2999</p>
    <small>Instock</small>
  </div>
  <button class='primary-button pink'>Add To Cart</button>
  <span class="badge">New!</span>
  <span class='heart'><img class='ecomm__icon' src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/309d5241b424ce7b648a1ac780f7be3dad194b0d/icons/ecomm/white%20heart.svg" alt="white heart" /></span>
</div>
  `

  return (
    <div className="Card__container">
      <h1 className="title">Cards</h1>
      <Description desc="Card is used to display information about any person/product/etc." />
      <div className="card">
        <img
          alt="model"
          src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/card%20component/prod.jpeg?raw=true"
        ></img>
        <div className="productInfo">
          <p>Product Name</p>
          <small>A short description</small>
          <small>Rating: 4.5/5</small>
          <p>₹2999</p>
          <small>Instock</small>
        </div>
        <button className='primary-button pink'>Add To Cart</button>
        <span className="badge">New!</span>
        <span className='heart'><img class='ecomm__icon' src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/309d5241b424ce7b648a1ac780f7be3dad194b0d/icons/ecomm/white%20heart.svg" alt="white heart" /></span>
      </div>
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default Card;
