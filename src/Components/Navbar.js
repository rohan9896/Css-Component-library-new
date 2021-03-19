import React, { useState } from "react";
import "../base.css";
import "./Navbar.css";
import './Heading.css'
import CodeContainer from './CodeContainer'

function Navbar() {
  const [[link1, link2, link3], setLink] = useState(["", "", ""]);
  const [[nameOfLink1, nameOfLink2, nameOfLink3], setNameOfLinks] = useState([
    "Name1",
    "Name2",
    "Name3",
  ]);

  const copyCode = `<nav><ul class="nav1__navList"><li class="nav1__navStart"><a href="${link1}">${nameOfLink1}</a><a href="${link2}">${nameOfLink2}</a><a href="${link3}">${nameOfLink3}</a></li><li class="nav1__navEnd"><span><input type="text" placeholder="🔎Search" /></span><span><button>LOG IN</button></span></li></ul></nav>`;

  return (
    <div>
      <div className="Navbar__container">
        <h1 className='title'>Navbars</h1>
        <div>
          <div className="navbar__linkInput">
            <p>Link 1: </p>
            <input
              value={nameOfLink1}
              onChange={(e) =>
                setNameOfLinks([e.target.value, nameOfLink2, nameOfLink3])
              }
              placeholder="Enter name of link 1"
            />
            <input
              value={link1}
              onChange={(e) => setLink([e.target.value, link2, link3])}
              placeholder="Enter link here"
            />
          </div>
          <div className="navbar__linkInput">
            <p>Link 2: </p>
            <input
              value={nameOfLink2}
              onChange={(e) =>
                setNameOfLinks([nameOfLink1, e.target.value, nameOfLink3])
              }
              placeholder="Enter name of link 2"
            />
            <input
              value={link2}
              onChange={(e) => setLink([link1, e.target.value, link3])}
              placeholder="Enter link here"
            />
          </div>
          <div className="navbar__linkInput">
            <p>Link 3: </p>
            <input
              value={nameOfLink3}
              onChange={(e) =>
                setNameOfLinks([nameOfLink1, nameOfLink2, e.target.value])
              }
              placeholder="Enter name of link 3"
            />
            <input
              value={link3}
              onChange={(e) => setLink([link1, link2, e.target.value])}
              placeholder="Enter link here"
            />
          </div>
        </div>
        <nav>
          <ul className="nav1__navList">
            <li className="nav1__navStart">
              <a href={link1}>{nameOfLink1}</a>
              <a href={link2}>{nameOfLink2}</a>
              <a href={link3}>{nameOfLink3}</a>
            </li>
            <li className="nav1__navEnd">
              <span>
                <input type="text" placeholder="🔎Search" />
              </span>
              <span>
                <button>LOG IN</button>
              </span>
            </li>
          </ul>
        </nav>
        <CodeContainer codeForCopy={copyCode} />
      </div>
    </div>
  );
}

export default Navbar;
