import React from "react";
import "../base.css";
import "./Card.css";
import CodeContainer from "./CodeContainer";
import './Heading.css'


function Card() {

    const copyCode = `<div class="card">
    <img
      alt="model"
      src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/main/icons/card%20component/4c8e4d83-2abd-4c20-85ec-ae01e3a99e091580970433774-Jack--Jones-Men-Yellow-Regular-Fit-Solid-Casual-Shirt-598158-1.webp"
    ></img>
    <div class="buttonContainer">
      <button class="transparentBtn">❤ Wishlist</button>
      <button class="transparentBtn">Buy Now</button>
    </div>
    <div class="productInfo">
      <p>Product Name</p>
      <small>Details</small>
      <p>Rating: 4.5/5</p>
      <p>₹2999</p>
    </div>
    <span class="badge">New!</span>
  </div>`;

  return (
    <div className='Card__container'>
        <h1 className='title'>Cards</h1>
      <div className="card">
        <img
          alt="model"
          src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/main/icons/card%20component/4c8e4d83-2abd-4c20-85ec-ae01e3a99e091580970433774-Jack--Jones-Men-Yellow-Regular-Fit-Solid-Casual-Shirt-598158-1.webp"
        ></img>
        <div className="buttonContainer">
          <button className="transparentBtn">❤ Wishlist</button>
          <button className="transparentBtn">Buy Now</button>
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
