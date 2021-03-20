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
import DocsHeader from "./Components/DocsHeader";
import DocsContent from "./Components/DocsContent";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact>
            <DocsHeader />
            <DocsContent />
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
