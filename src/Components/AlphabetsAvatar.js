import React, { useState } from "react";
import "../base.css";
import "./AlphabetsAvatar.css";
import './Heading.css'
import CodeContainer from "./CodeContainer"

const alphabets = [...Array(26)].map((alphabetsObj, index) => {
  return {
    id: index + 1,
    alphabet: String.fromCharCode(index + 65),
  };
});

function AlphabetsAvatar() {
  const [avatarBgColor, setAvatarBgColor] = useState("#2874f0");
  const [selectedAlphabet, setSelectedAlphabet] = useState("A");

  const copyCode = `<div style="background-color: ${avatarBgColor};" class="avatar-alphabet"><span>${selectedAlphabet}</span></div>`;

  return (
    <div className="alphabetAvatar">
      <h1 className='title'>Alphabets Avatar</h1>
      <h3>Select backgroundColor from here: </h3>
      <input
        type="color"
        id="favcolor"
        name="favcolor"
        value={avatarBgColor}
        onChange={(e) => setAvatarBgColor(e.target.value)}
      ></input>
      <ul className="alphabetAvatar__list">
        {alphabets.map((alphabetObj) => {
          return (
            <li
              onClick={() => setSelectedAlphabet(alphabetObj.alphabet)}
              key={alphabetObj.id}
            >
              <div
                style={{ backgroundColor: avatarBgColor }}
                className="avatar-alphabet"
              >
                <span>{alphabetObj.alphabet}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default AlphabetsAvatar;
