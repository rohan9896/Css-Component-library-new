import React, { useState } from "react";
import "./Header.css";
import "../base.css";

function Header() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  return (
    <div>
      <nav className="header__nav">
        <span>🧿EFFORTLESS UI</span>
        <ul className="header__DesktopList">
          <li>
            <a href="http://github.com/">Getting Started</a>
          </li>
          <li>
            <a href="http://github.com/">Components List</a>
          </li>
          <li>
            <a href="http://github.com/">Feedback</a>
          </li>
          <li>
            <a href="http://github.com/">Git Repo</a>
          </li>
        </ul>
        <button
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
          style={{ backgroundColor: "white" }}
          className="icon-button hamburger-button"
        >
          <img
            src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/0863b5c2e3b5f2cd1e7d2a15d4df564a5ba7bbac/icons/navbar%20component/hamburger.svg"
            alt="hamburger Icon"
          />
        </button>
      </nav>
      {hamburgerClicked && (
          <ul className='header__mobileList'>
            <li>
              <a href="http://github.com/">Getting Started</a>
            </li>
            <li>
              <a href="http://github.com/">Components List</a>
            </li>
            <li>
              <a href="http://github.com/">Feedback</a>
            </li>
            <li>
              <a href="http://github.com/">Git Repo</a>
            </li>
          </ul>
        )}
    </div>
  );
}

export default Header;
