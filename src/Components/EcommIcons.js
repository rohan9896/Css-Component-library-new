import React, { useState } from "react";
import "./Heading.css";
import "../base.css";
import "./EcommIcons.css";
import CodeContainer from "./CodeContainer"

const ecommIcons = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/8dde3b65380a2432ffc94bd652634054117b0159/icons/ecomm/cart.svg",
    name: "cart",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/8dde3b65380a2432ffc94bd652634054117b0159/icons/ecomm/category.svg",
    name: "category",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/8dde3b65380a2432ffc94bd652634054117b0159/icons/ecomm/home.svg",
    name: "home",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/8dde3b65380a2432ffc94bd652634054117b0159/icons/ecomm/search.svg",
    name: "search",
  },
  {
    id: 4,
    img: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/309d5241b424ce7b648a1ac780f7be3dad194b0d/icons/ecomm/white%20heart.svg",
    name: "white heart"
  },
  {
    id: 5,
    img: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/309d5241b424ce7b648a1ac780f7be3dad194b0d/icons/ecomm/heart.svg",
    name: "red heart"
  },
  {
    id: 6,
    img: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/1dcd8395b4bc7f50aaa79d0c36678fef583d1143/icons/ecomm/wishlist.svg",
    name: "wishlist"
  },
  {
    id: 7,
    img: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/a1e961baa4dda6a20bb50123b9aa102aea3091ef/icons/ecomm/payment.svg",
    name: "payment"
  },
  {
    id: 8,
    img: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/a1e961baa4dda6a20bb50123b9aa102aea3091ef/icons/ecomm/truck.svg",
    name: "truck"
  },
  {
    id: 9,
    img: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/a1e961baa4dda6a20bb50123b9aa102aea3091ef/icons/ecomm/customer_support.svg",
    name: "customer_support"
  },
];

const IconWithNum = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/8dde3b65380a2432ffc94bd652634054117b0159/icons/ecomm/cart.svg",
    name: "Icon with num",
    num: 5,
  },
];

function EcommIcons() {
  const [icon, setIcon] = useState(ecommIcons[0]);

  const copyCode =
    icon.name === "Icon with num"
      ? `
      <div class="iconWithNum">
        <img
        class="ecomm__icon iconWithNum"
        src="${icon.img}"
        alt="${icon.name}"
        />
        <span>${icon.num}</span>
      </div>
      `
      : `<img class='ecomm__icon' src="${icon.img}" alt="${icon.name}" />`;

  return (
    <div>
      <div className="EcommIcons">
        <h1 className="title">Icons for E-Commerce Website</h1>
        <ul className="EcommIcons__list">
          {ecommIcons.map((iconObj) => {
            return (
              <li onClick={() => setIcon(iconObj)} key={iconObj.id}>
                <img
                  className="ecomm__icon"
                  src={iconObj.img}
                  alt={iconObj.name}
                />
              </li>
            );
          })}
          {IconWithNum.map((iconObj) => {
            return (
              <li key={iconObj.id}>
                <div className="iconWithNum" onClick={() => setIcon(iconObj)}>
                  <img
                    className="ecomm__icon iconWithNum"
                    src={iconObj.img}
                    alt={iconObj.name}
                  />
                  <span>{iconObj.num}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default EcommIcons;
