import React from "react";
import IconButton from "./IconButton";
import PrimaryButton from "./PrimaryButton";
import './Heading.css'

function Buttons() {
  return (
    <div>
      <h1 className='title'>Buttons</h1>
      <PrimaryButton />
      <IconButton />
    </div>
  );
}

export default Buttons;
