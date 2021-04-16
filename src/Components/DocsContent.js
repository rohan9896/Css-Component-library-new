import React from "react";
import CodeContainer from "./CodeContainer";
import '../base.css'

const copyCode = `@import url("https://effortlessui.netlify.app/base.css");`;

const reactComponentsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  borderTop: "1px solid rgb(216, 207, 207)"
}

const linkStyle= {
  color: "red",
  textDecoration: "none",
  margin: "1rem"
}

function DocsContent() {
  return (
    <div>
      <div id="installation" style={{margin: "2rem"}} className="docsContent">
          <h1>📥 INSTALLATION</h1>
          <h4>Copy the following line and Paste it to a CSS file and link that file to your HTML document</h4>
          <CodeContainer codeForCopy={copyCode} />
          <h4>OR Download the CSS file by clicking below</h4>
          <a href="https://effortlessui.netlify.app/base.css" download='base.css'><button style={{cursor: "pointer"}} className="primary-button  blue">Download</button></a>
      </div>
      <div style={reactComponentsContainerStyle}>
        <h1>Also, checkOut React Components-</h1>
        <a style={linkStyle} href="https://codesandbox.io/dashboard/all/ecommerce-components?workspace=6d5fb724-6080-4712-8316-96a5bcb2a71b">E-Commerce Website Components</a>
        <a style={linkStyle} href="https://codesandbox.io/dashboard/all/video-lib?workspace=6d5fb724-6080-4712-8316-96a5bcb2a71b">Video Library(Youtube like app) Components</a>
      </div>
    </div>
  );
}

export default DocsContent;
