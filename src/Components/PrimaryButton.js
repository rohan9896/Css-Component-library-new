import React, { useState } from "react";
import "../base.css";
import "./PrimaryButton.css";
import "./Heading.css";
import CodeContainer from './CodeContainer'

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
    colorName: `maroon`,
  },
];

// const test = `primary-button pink`; {test}

function PrimaryButton() {
  const [buttonColorCode, setButtonColorCode] = useState(`blue`);
  const [linkButtonClicked, setLinkButtonClicked] = useState(false);
  const [linkVal, setLinkVal] = useState("");

  const copyCode = linkButtonClicked
    ? `<a href="${linkVal}" role="button"><button class="primary-button  ${buttonColorCode}">Link Button</button></a>`
    : `<button class="primary-button ${buttonColorCode}">Normal Button</button>`;

  return (
    <div>
      <div className="primaryButton__headingContainer">
        <h2 className="subtitle">Primary Button</h2>
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
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default PrimaryButton;
