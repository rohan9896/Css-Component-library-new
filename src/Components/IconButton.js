import React, { useState } from "react";
import "../base.css"
import "./IconButton.css";
import './codecontainer.css';

const icons = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/left-arrow.svg",
    name: "Left Arrow",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/rightArrow.svg",
    name: "Right Arrow",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/cancel.svg",
    name: "Cancel",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/check.svg",
    name: "Check",
  },
  {
    id: 5,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/trash.svg",
    name: "Trash",
  },
];

function IconButton() {
  const [iconImg, seticonImg] = useState(
    `https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/left-arrow.svg`
  );
  const [ownIconClicked, setownIconClicked] = useState(false);
  const [linkVal, setlinkVal] = useState('');

  return (
    <div>
      <h2>Icon Buttons</h2>
      <ul className="iconButton__buttonList">
        {icons.map((iconObj) => {
          return (
            <li key={iconObj.id}>
              <button
                className="icon-button"
                onClick={() => seticonImg(iconObj.img)}
              >
                <img alt={iconObj.name} src={iconObj.img} />
              </button>
            </li>
          );
        })}
        <button onClick={() => setownIconClicked(!ownIconClicked)}>Add your own icon</button>
      </ul>
      {ownIconClicked && <textarea value={linkVal} onChange={(e) => setlinkVal(e.target.value)} placeholder="enter link of your icon image"></textarea>}
      <div className="codeContainer">
        <p>{`<button class="icon-button"><img src="${ownIconClicked ? linkVal : iconImg}" /></button>`}</p>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<button class="icon-button"><img src="${ownIconClicked ? linkVal : iconImg}" /></button>`
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

