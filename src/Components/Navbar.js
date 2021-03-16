import React, { useState } from "react";
import "../base.css";
import "./Navbar.css";
import "./codecontainer.css";

function Navbar() {
  const [[link1, link2, link3], setLink] = useState([
    "https://undraw.co/search",
    "https://undraw.co/search",
    "https://undraw.co/search",
  ]);

  return (
    <div>
      <div className="Navbar__container">
        <h2>Navbars</h2>
        <div>
          <div className="navbar__linkInput">
            <p>Link 1: </p>
            <input placeholder="Enter link here" />
          </div>
          <div className="navbar__linkInput">
            <p>Link 2: </p>
            <input placeholder="Enter link here" />
          </div>
          <div className="navbar__linkInput">
            <p>Link 3: </p>
            <input placeholder="Enter link here" />
          </div>
        </div>
        <nav>
          <ul className="ghost__navList">
            <li className="ghost__navStart">
              <a href={link1}>LINK 1</a>
              <a href={link2}>LINK 2</a>
              <a href={link3}>LINK 3</a>
            </li>
            <li className="ghost__navEnd">
              <span>
                <a href="#">
                  <img
                    src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/navbar%20component/facebook-brands.png?raw=true"
                    alt="fb"
                  ></img>
                </a>
              </span>
              <span>
                <a href="#">
                  <img
                    src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/navbar%20component/twitter-brands.png?raw=true"
                    alt="twitter"
                  ></img>
                </a>
              </span>
              <span>
                <a href="#">
                  <img
                    src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/navbar%20component/linkedin.png?raw=true"
                    alt="linkedin"
                  ></img>
                </a>
              </span>
              <span>
                <button>LOG IN</button>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
