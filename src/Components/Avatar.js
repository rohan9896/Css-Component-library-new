import React, { useState } from "react";
import "../base.css";
import "./Avatar.css";
import './codecontainer.css';

const faceAvatars = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarUser.svg",
    name: "user",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarUser2.svg",
    name: "user2",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarMan.svg",
    name: "man",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarWomen.svg",
    name: "woman",
  },
  {
    id: 5,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarHacker.svg",
    name: "hacker",
  },
];

function Avatar() {
  const [faceAvatarImage, setFaceAvatarImage] = useState(
    `https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarUser.svg`
  );
  const [ownPhotoClicked, setOwnPhotoClicked] = useState(false);
  const [linkVal, setLinkVal] = useState('');

  return (
    <div>
      <h2>Avatars</h2>
      <ul className="avatar__list">
        {faceAvatars.map((faceAvatarObj) => {
          return (
            <li key={faceAvatarObj.id}>
              <img
                className="avatar"
                src={faceAvatarObj.img}
                alt={faceAvatarObj.name}
                onClick={() => setFaceAvatarImage(faceAvatarObj.img)}
              />
            </li>
          );
        })}
        <button onClick={() => setOwnPhotoClicked(!ownPhotoClicked)}>Add Your Own Avatar</button>
      </ul>
      {
          ownPhotoClicked && <textarea value={linkVal} onChange={(e) => setLinkVal(e.target.value)} placeholder='enter link of your photo'></textarea>
      }
      <div className="codeContainer">
        <p>{`<img class="avatar" src="${ownPhotoClicked ? linkVal : faceAvatarImage}" alt="avatar" />`}</p>
        <button onClick={() => navigator.clipboard.writeText(`<img class="avatar" src="${ownPhotoClicked ? linkVal : faceAvatarImage}" alt="avatar" />`)}>Copy</button>
      </div>
    </div>
  );
}

export default Avatar;
