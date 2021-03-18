import React from "react";
import "./App.css";
import "./Components/Buttons";
import Buttons from "./Components/Buttons";
import FaceAvatar from "./Components/FaceAvatar";
import AlphabetsAvatar from "./Components/AlphabetsAvatar";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SocialMediaIcon from "./Components/SocialIcon";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact>
            <p>Add this line in a css file - @import url("https://effortlessui.netlify.app/base.css")</p>
            <p>Link that css file to your html document</p>
            <p>Go to components list from nav bar to see the components</p>
            <p>Customize the components according to your needs from site itself</p>
            <h1>Rest of the getting started docs goes here.....</h1>
          </Route>
          <Route path="/componentslist">
            <Buttons />
            <hr />
            <FaceAvatar />
            <hr />
            <AlphabetsAvatar />
            <hr />
            <Alert />
            <hr />
            <Navbar />
            <hr />
            <SocialMediaIcon />
            <hr />
            <h1>TO BE CONTINUED............</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
