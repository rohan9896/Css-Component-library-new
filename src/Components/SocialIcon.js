import React, { useState } from "react";
import "../base.css";
import "./SocialIcon.css";
import "./Heading.css";
import "./codecontainer.css";

const icons = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/facebook.svg",
    name: "facebook",
    link: "",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/instagram.svg",
    name: "instagram",
    link: "",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/linkedin.svg",
    name: "linkedin",
    link: "",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/reddit.svg",
    name: "reddit",
    link: "",
  },
  {
    id: 5,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/snapchat.svg",
    name: "snapchat",
    link: "",
  },
  {
    id: 6,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/tik-tok.svg",
    name: "tiktok",
    link: "",
  },
  {
    id: 7,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/whatsapp.svg",
    name: "whatsapp",
    link: "",
  },
  {
    id: 8,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/youtube.svg",
    name: "youtube",
    link: "",
  },
];

function SocialIcon() {
  const [icon, setIcon] = useState(icons[0]);
  const [changeLinkClicked, setChangeLinkClicked] = useState(false);
  const [linkVal, setlinkVal] = useState("");

  return (
    <div>
      <div className="socialIcon">
        <h1 className="title">Social Media Icons</h1>
        <ul className="socialIcon__list">
          {icons.map((iconObj) => {
            return (
              <li key={iconObj.id} onClick={() => setIcon(iconObj)}>
                <div className="socialIcon">
                  <img src={iconObj.img} alt={iconObj.name} />
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={() => setChangeLinkClicked(!changeLinkClicked)}>
          {changeLinkClicked ? "Hide textarea" : "Add Link"}
        </button>
        {changeLinkClicked && (
          <textarea
            value={linkVal}
            onChange={(e) => setlinkVal(e.target.value)}
            placeholder="enter link here"
          ></textarea>
        )}
      </div>
      <div className="codeContainer">
        <p>{`<a class='socialIcon' href="${linkVal}">
            <img src="${icon.img}" alt="${icon.name}" />
            </a>`}</p>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<a class='socialIcon' href="${linkVal}"><img src="${icon.img}" alt="${icon.name}" /></a>`
            )
          }
        >
          Copy
        </button>
      </div>
      ;
    </div>
  );
}

export default SocialIcon;
