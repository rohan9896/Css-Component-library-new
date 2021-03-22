import React from "react";
import "../base.css";
import "./Heading.css";
import "./Input.css";

function Input() {
  return (
    <div className="input__container">
      <h1 className="title">Input Field</h1>
      <h1>XXXXXX------- WORK IN PROGRESS --------XXXXXX</h1>
      <input type="text" className="primaryInput" placeholder="Primary Input" />
      <input type="text" className="primaryInput focus" placeholder="Primary Input With Border Color" />
      <input type="text" className="roundInput" placeholder="Round Input" />
      <input type="text" className="searchInput" placeholder="🔍 Search..." />
    </div>
  );
}

export default Input;
