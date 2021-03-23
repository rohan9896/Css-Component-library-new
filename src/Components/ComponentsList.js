import React from 'react'
import Buttons from "./Buttons";
import Alert from './Alert'
import Navbar from "./Navbar";
import SocialMediaIcon from "./SocialIcon";
import Avatar from "./Avatar";
import Input from './Input';
import Card from './Card';


function ComponentsList() {


    return (
        <div>
            <Buttons />
            <Avatar />
            <Alert />
            <Navbar />
            <SocialMediaIcon />
            <Input />
            <Card />
        </div>
    )
}

export default ComponentsList
