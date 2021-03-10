import React, { useState } from "react";
import '../base.css'
import "./PrimaryButton.css";
import './codecontainer.css';

const colors = [
  {
    id: 1,
    colorName: `blue`,
  },
  {
    id: 2,
    colorName: `pink`,
  },
  {
    id: 3,
    colorName: `red`,
  },
  {
    id: 4,
    colorName: `yellow`,
  },
  {
    id: 5,
    colorName: `lightgreen`,
  },
  {
    id: 6,
    colorName: `purple`,
  },
  {
    id: 7,
    colorName: `lightOrange`,
  },
  {
    id: 8,
    colorName: `orange`,
  },
  {
    id: 9,
    colorName: `greenishBlue`,
  },
  {
    id: 10,
    colorName: `grey`,
  },
];

// const test = `primary-button pink`; {test}

function PrimaryButton() {
  const [buttonColorCode, setButtonColorCode] = useState(`blue`);
  const [linkButtonClicked, setLinkButtonClicked] = useState(false);
  const [linkVal, setLinkVal] = useState("");

  return (
    <div>
      <div className="primaryButton__headingContainer">
        <h2>Primary Button</h2>
        <button onClick={() => setLinkButtonClicked(!linkButtonClicked)}>
          {linkButtonClicked ? "Hide Link Button" : "Add Link Button"}
        </button>
      </div>
      {linkButtonClicked && (
        <textarea
          placeholder="enter link here"
          value={linkVal}
          onChange={(e) => setLinkVal(e.target.value)}
        ></textarea>
      )}
      <ul className="primaryButton__buttonList">
        {colors.map((colorObj) => {
          return (
            <li key={colorObj.id}>
              <button
                onClick={() => setButtonColorCode(colorObj.colorName)}
                className={`primary-button ${colorObj.colorName}`}
              >
                {linkButtonClicked ? "Link Button" : "Normal Button"}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="codeContainer">
        {linkButtonClicked ? (
          <p>{`<a href="${linkVal}" role="button"><button class="primary-button  ${buttonColorCode}">Link Button</button></a>`}</p>
        ) : (
          <p>{`<button class="primary-button ${buttonColorCode}">Normal Button</button>`}</p>
        )}
        {/* <p>{`<button class="primary-button ${buttonColorCode}">Primary Button</button>`}</p> */}
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              linkButtonClicked ? `<a href="${linkVal}" role="button"><button class="primary-button  ${buttonColorCode}">Link Button</button></a>` : `<button class="primary-button ${buttonColorCode}">Normal Button</button>`
            )
          }
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default PrimaryButton;

// function PrimaryButton() {
//   const [buttonColorCode, setButtonColorCode] = useState(`blue`);

//   return (
//     <div>
//       <h2>Primary Button</h2>
//       <div className="primaryButton__buttonContainer">
//         <button
//           onClick={() => setButtonColorCode(`blue`)}
//           className="primary-button blue"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`pink`)}
//           className="primary-button pink"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`red`)}
//           className="primary-button red"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`yellow`)}
//           className="primary-button yellow"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`lightgreen`)}
//           className="primary-button lightgreen"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`purple`)}
//           className="primary-button purple"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`lightOrange`)}
//           className="primary-button lightOrange"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`orange`)}
//           className="primary-button orange"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`greenishBlue`)}
//           className="primary-button greenishBlue"
//         >
//           Primary Button
//         </button>
//         <button
//           onClick={() => setButtonColorCode(`grey`)}
//           className="primary-button grey"
//         >
//           Primary Button
//         </button>
//       </div>
//       <div className="primaryButton__codeContainer">
//         <p>{`<button class="primary-button ${buttonColorCode} ">Primary Button</button>`}</p>
//         <button
//           onClick={() =>
//             navigator.clipboard.writeText(
//               `<button class="primary-button ${buttonColorCode} ">Primary Button</button>`
//             )
//           }
//         >
//           Copy
//         </button>
//       </div>
//     </div>
//   );
// }
