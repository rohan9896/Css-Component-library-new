import React, { useState } from "react";
import "../style.css";
import "./IconButton.css";

const icons = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/CSS-component-library/0c5b4503814556a48beebd849585d17afb142e06/icons/left-arrow.svg",
    name: "Left Arrow",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/CSS-component-library/0c5b4503814556a48beebd849585d17afb142e06/icons/rightArrow.svg",
    name: "Right Arrow",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/CSS-component-library/eae5ccfe00eabccae185a910d6a29a36f8feb893/icons/cancel.svg",
    name: "Cancel",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/CSS-component-library/ad81ebf5b89717f278f85a1970c851520dfa6768/icons/check.svg",
    name: "Check",
  },
  {
    id: 5,
    img:
      "https://raw.githubusercontent.com/rohan9896/CSS-component-library/eae5ccfe00eabccae185a910d6a29a36f8feb893/icons/trash.svg",
    name: "Trash",
  },
];

function IconButton() {
  const [img, setImg] = useState(
    `https://raw.githubusercontent.com/rohan9896/CSS-component-library/0c5b4503814556a48beebd849585d17afb142e06/icons/left-arrow.svg`
  );

  return (
    <div>
      <h2>Icon Buttons</h2>
      <ul className="iconButton__buttonList">
        {icons.map((iconObj) => {
          return (
            <li key={iconObj.id}>
              <button
                className="icon-button"
                onClick={() => setImg(iconObj.img)}
              >
                <img alt="icon" src={iconObj.img} />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="iconButton__codeContainer">
        <p>{`<button class="icon-button"><img src="${img}" /></button>`}</p>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<button class="icon-button"><img src="${img}" /></button>`
            )
          }
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default IconButton;

// function IconButton() {

//   // const [iconsObj, setIconsObj] = useState(icons);
//   const [img, setImg] = useState()

//   return (
//     <div>
//       <h2>Icons Buttons</h2>
//       <div className="iconButton__buttonContainer">
//         <button className="icon-button" onClick={() => }>
//           <img
//             alt="icon"
//             src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/0c5b4503814556a48beebd849585d17afb142e06/icons/left-arrow.svg"
//           />
//         </button>
//         <button className="icon-button">
//           <img
//             alt="icon"
//             src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/0c5b4503814556a48beebd849585d17afb142e06/icons/rightArrow.svg"
//           />
//         </button>
//         <button class="icon-button">
//           <img
//             alt="icon"
//             src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/eae5ccfe00eabccae185a910d6a29a36f8feb893/icons/cancel.svg"
//           />
//         </button>
//         <button class="icon-button">
//           <img
//             alt="icon"
//             src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/ad81ebf5b89717f278f85a1970c851520dfa6768/icons/check.svg"
//           />
//         </button>
//         <button class="icon-button">
//           <img
//             alt="icon"
//             src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/eae5ccfe00eabccae185a910d6a29a36f8feb893/icons/trash.svg"
//           />
//         </button>
//       </div>
//       <div className="iconButton__codeContainer">
//         <p>{`<button class="icon-button"><img src="${img}" /></button>`}</p>
//         <button
//           onClick={() =>
//             navigator.clipboard.writeText(
//               `<button class="icon-button"><img src="${img}" /></button>`
//             )
//           }
//         >
//           Copy
//         </button>
//       </div>
//     </div>
//   );
// }

