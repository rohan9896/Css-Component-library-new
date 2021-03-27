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
            src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/
        card%20component/prod.jpeg?raw=true"
        ></img>
        <div class="buttonContainer">
            <button class="transparentBtn">❤ Wishlist</button>
            <button class="transparentBtn">Add To Cart</button>
        </div>
        <div class="productInfo">
            <p>Product Name</p>
            <small>Details</small>
            <p>Rating: 4.5/5</p>
            <p>₹2999</p>
        </div>
        <span class="badge">New!</span>
    </div>
  `

  return (
    <div className="Card__container">
      <h1 className="title">Cards</h1>
      <Description desc="Card is used to display information about any person/product/etc." />
      <div className="card">
        <img
          alt="model"
          src="https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s21/gallery/in-galaxy-s21-5g-g996-sm-g996bzsdinu-368371784"
        ></img>
        <div className='img'></div>
        <div className="buttonContainer">
          <button className="transparentBtn">❤ Wishlist</button>
          <button className="transparentBtn">Add To Cart</button>
        </div>
        <div className="productInfo">
          <p>Product Name</p>
          <small>Details</small>
          <p>Rating: 4.5/5</p>
          <p>₹2999</p>
        </div>
        <span class="badge">New!</span>
      </div>
      <CodeContainer codeForCopy={copyCode} />
      
    </div>
  );
}

export default Card;
